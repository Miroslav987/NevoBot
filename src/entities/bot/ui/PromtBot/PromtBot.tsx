import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { PromtType } from '../ListPromtBlock/model/useListPromt';
import styles from './styles.module.scss';
import { useModal } from '@shared/context/ModalProvider';
import DeletePromt from '../DeletePromt/DeletePromt';

type PromtBotProps = {
  promt: PromtType;
};

const PromtBot: React.FC<PromtBotProps> = ({ promt }) => {
  const [form] = Form.useForm();
  const { openModal } = useModal();

  useEffect(() => {
    form.setFieldsValue({ promt: promt.promt || '' });
  }, [form, promt.promt]);

  const onFinish = (values: any) => {
    console.log(values.promt);
  };

  const applyDefaultPromt = () => {
    if (promt.defaultPromt) {
      form.setFieldsValue({ promt: promt.defaultPromt });
    }
  };

  const applyReadyPromt = (readyPromtText: string) => {
    form.setFieldsValue({ promt: readyPromtText });
  };

  return (
    <div className={styles.promtBot}>
      <p>{promt.name}</p>
      <br />
      <div>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="promt">
            <Input.TextArea rows={5} />
          </Form.Item>
          <Form.Item>
            {promt.defaultPromt && (
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                onClick={applyDefaultPromt}
              >
                По умолчанию
              </Button>
            )}
            <Button type="primary" style={{ marginRight: 8 }} htmlType="submit">
              Сохранить
            </Button>
            {!promt.default && (
              <Button
                type="primary"
                danger
                onClick={() => openModal(<DeletePromt name={promt.name} />)}
              >
                Удалить
              </Button>
            )}
          </Form.Item>
        </Form>
      {promt.readyPromt && promt.readyPromt.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <p><strong>Готовые куски:</strong></p>
          <div style={{ marginTop: 10 , display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {promt.readyPromt.map((r) => (
              <Button
                key={r.name}
                size="small"
                onClick={() => applyReadyPromt(r.promt)}
              >
                {r.name}
              </Button>
            ))}
          </div>
        </div>
      )}
      </div>

    </div>
  );
};

export default PromtBot;
