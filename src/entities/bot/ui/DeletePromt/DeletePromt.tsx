import React, { FC } from 'react'

import { Button, Form } from 'antd'

import { useModal } from '@shared/context/ModalProvider'

import { usePromtStore } from '../ListPromtBlock/model/useListPromt'

type DeletePromtProps = {
  name: string
}

const DeletePromt: FC<DeletePromtProps> = ({ name }) => {
  const { closeModal } = useModal()
  const deletePromt = usePromtStore((state) => state.deletePromt)

  const handleFinish = () => {
    deletePromt(name)
    closeModal()
  }

  return (
    <Form onFinish={handleFinish}>
      <Form.Item>
        <Button type="default" onClick={closeModal}>
          Отменить
        </Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
          Удалить
        </Button>
      </Form.Item>
    </Form>
  )
}

export default DeletePromt
