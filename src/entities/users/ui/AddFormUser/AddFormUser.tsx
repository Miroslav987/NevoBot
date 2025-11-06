import React from 'react'

import { Button, Checkbox, Col, Form, Input, Row, Space, Typography } from 'antd'

import { useProfileStore } from '@entities/profile/model/store'
import { useUsersStore } from '@entities/users/model/store'

const AddFormUser = () => {
  const { access_token } = useProfileStore((state) => state.user)
  const { AddUser } = useUsersStore()
  const [form] = Form.useForm()
  const permissions = ['manage_products', 'view_qr', 'view_costs', 'manage_servers', 'manage_bots', 'manage_users']

  function handleFinish(obj:any) {
   if (access_token) AddUser(obj, access_token)
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
      initialValues={{
        permissions: permissions.reduce(
          (acc, key) => {
            acc[key] = false
            return acc
          },
          {} as Record<string, boolean>,
        ),
      }}
    >
      <Form.Item label="username" name="username" rules={[{ required: true, message: 'Введите  username' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="email" name="email" rules={[{ required: true, message: 'Введите email' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="password" name="password" rules={[{ required: true, message: 'Введите password' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Permissions">
        <Space.Compact>
          <Row>
            {permissions
              ? permissions.map((e) => (
                  <Col>
                    <Form.Item name={['permissions', `${e}`]} valuePropName="checked">
                      <Checkbox>{e}</Checkbox>
                    </Form.Item>
                  </Col>
                ))
              : null}
          </Row>
        </Space.Compact>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>
      <Form.Item noStyle shouldUpdate>
        {() => {
          return (
            <Typography>
              <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
            </Typography>
          )
        }}
      </Form.Item>
    </Form>
  )
}

export default AddFormUser
// <Form.Item name="manage_products" valuePropName="checked" noStyle>
//   <Checkbox>manage_products</Checkbox>
// </Form.Item>
// <Form.Item name="view_qr" valuePropName="checked" noStyle>
//   <Checkbox>view_qr</Checkbox>
// </Form.Item>
// <Form.Item name="view_costs" valuePropName="checked" noStyle>
//   <Checkbox>view_costs</Checkbox>
// </Form.Item>
// <Form.Item name="manage_servers" valuePropName="checked" noStyle>
//   <Checkbox>manage_servers</Checkbox>
// </Form.Item>
// <Form.Item name="manage_bots" valuePropName="checked" noStyle>
//   <Checkbox>manage_bots</Checkbox>
// </Form.Item>
// <Form.Item name="manage_bots" valuePropName="checked" noStyle>
//   <Checkbox>manage_bots</Checkbox>
// </Form.Item>
// <Form.Item name="manage_users" valuePropName="checked" noStyle>
//   <Checkbox>manage_users</Checkbox>
// </Form.Item>
