import { Button, Checkbox, Form, InputNumber, Slider, Space, Typography } from 'antd'

import styles from './styles.module.scss'

const { Paragraph } = Typography

const SettingsForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Form values:', values)
  }

  const onChangeSlider = (value: number) => {
    console.log('Slider changed:', value)
  }

  return (
    <Form
      form={form}
      className={styles.settingForm}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        responseTime: 5,
        autoStart: 30,
        showName: true,
        showPrice: true,
        showCategory: true,
        showProductsLimit: 3,
      }}
    >
      <Paragraph>Время на ответ сообщения (секунды):</Paragraph>
      <Form.Item name="responseTime">
        <Slider min={1} max={20} tooltip={{ open: true }} onChange={onChangeSlider} />
      </Form.Item>

      <Paragraph>Время автоматического запуска (минуты):</Paragraph>
      <Form.Item name="autoStart">
        <Slider min={1} max={60} tooltip={{ open: true }} onChange={onChangeSlider} />
      </Form.Item>

      <Form.Item name="showName" valuePropName="checked">
        <Checkbox>Показывать название</Checkbox>
      </Form.Item>

      <Form.Item name="showPrice" valuePropName="checked">
        <Checkbox>Показывать цены</Checkbox>
      </Form.Item>

      <Form.Item name="showCategory" valuePropName="checked">
        <Checkbox>Показывать категории</Checkbox>
      </Form.Item>

      <Form.Item
        name="showProductsLimit"
        label="Показывать товаров (максимум 7)"
        rules={[
          { required: true, message: 'Введите число от 1 до 7' },
          {
            type: 'number',
            min: 1,
            max: 7,
            message: 'Можно вводить только числа от 1 до 7',
          },
        ]}
      >
        <InputNumber min={1} max={7} />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>
            Сбросить
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default SettingsForm
