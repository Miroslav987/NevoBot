import React from 'react'

import { CloseOutlined } from '@ant-design/icons'
import { Button, Form, Input, InputNumber, Space, Typography } from 'antd'

import { useBotSlice } from '@entities/bot/model/store'
import { useProfileStore } from '@entities/profile/model/store'

const AddFormBot: React.FC = () => {
  const { user } = useProfileStore()
  const { AddBot } = useBotSlice()
  const [form] = Form.useForm()

  const handleFinish = (values: any) => {
    const envVarsObj: Record<string, any> = {}
    values.env_vars?.forEach((pair: any) => {
      if (pair?.key) envVarsObj[pair.key] = pair.value
    })

    const result = {
      name: values.name,
      image: values.image,
      bot_url: values.bot_url,
      port: values.port,
      server_id: values.server_id,
      env_vars: envVarsObj,
    }

    if (!user?.access_token) {
     return console.error('Токен доступа отсутствует')
    }
    const token: string = user.access_token

    AddBot(result, token)
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      name="bot_form"
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onFinish={handleFinish}
    >
      {/* name */}
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Введите имя бота' }]}>
        <Input />
      </Form.Item>

      {/* image */}
      <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Введите Docker image' }]}>
        <Input />
      </Form.Item>

      {/* bot_url */}
      <Form.Item label="Bot URL" name="bot_url" rules={[{ required: true, message: 'Введите URL бота' }]}>
        <Input />
      </Form.Item>

      {/* port */}
      <Form.Item label="Port" name="port" rules={[{ required: true, message: 'Введите порт' }]}>
        <InputNumber />
      </Form.Item>

      {/* server_id */}
      <Form.Item label="Server ID" name="server_id" rules={[{ required: true, message: 'Введите server_id' }]}>
        <InputNumber />
      </Form.Item>

      {/* env_vars */}
      <Form.Item label="env_vars">
        <Form.List name="env_vars">
          {(fields, { add, remove }) => (
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  {/* key */}
                  <Form.Item
                    name={[field.name, 'key']}
                    rules={[
                      { required: true, message: 'Введите ключ' },
                      {
                        validator: (_, value) => {
                          const envs = form.getFieldValue('env_vars') || []
                          const duplicates = envs.filter((v: any) => v?.key === value)
                          if (duplicates.length > 1) {
                            return Promise.reject(new Error('Ключ уже существует'))
                          }
                          return Promise.resolve()
                        },
                      },
                    ]}
                  >
                    <Input placeholder="Key" />
                  </Form.Item>

                  <Form.Item name={[field.name, 'value']} rules={[{ required: true, message: 'Введите значение' }]}>
                    <Input placeholder="Value" />
                  </Form.Item>

                  <CloseOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}

              <Button type="dashed" onClick={() => add()} block>
                + Add Env Var
              </Button>
            </div>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>

      <Form.Item noStyle shouldUpdate>
        {() => {
          const raw = form.getFieldsValue()
          const envVarsObj: Record<string, any> = {}
          raw.env_vars?.forEach((pair: any) => {
            if (pair?.key) envVarsObj[pair.key] = pair.value
          })
          const result = {
            name: raw.name,
            image: raw.image,
            bot_url: raw.bot_url,
            port: raw.port,
            server_id: raw.server_id,
            env_vars: envVarsObj,
          }
          return (
            <Typography>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </Typography>
          )
        }}
      </Form.Item>
    </Form>
  )
}

export default AddFormBot
