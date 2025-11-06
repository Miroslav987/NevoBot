import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { PromtType, usePromtStore } from "../ListPromtBlock/model/useListPromt";

const EditFormPromt = (obj:PromtType) => {
  const [form] = Form.useForm();
  const addPromt = usePromtStore((state) => state.addPromt);

  const handleFinish = (obj: PromtType) => {
    addPromt(obj);
  };

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
      <Form.Item
        label="Название промта"
        name="name"
        rules={[{ required: true, message: "Введите название промта" }]}
        
      >
        <Input disabled={obj.default?true:false} />
      </Form.Item>

      <Form.Item
        label="Промт"
        name="promt"
        rules={[{ required: true, message: "Введите промт" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>

      <Typography>
        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
      </Typography>
    </Form>
  );
};

export default EditFormPromt;
