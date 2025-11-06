import React, { useEffect } from 'react'

import { Button } from 'antd'

import { useProfileStore } from '@entities/profile/model/store'
import { useUsersStore } from '@entities/users/model/store'
import AddFormUser from '@entities/users/ui/AddFormUser/AddFormUser'
import TableUsers from '@entities/users/ui/TableUsers/TableUsers'

import { useModal } from '@shared/context/ModalProvider'

const Users = () => {
  const { openModal } = useModal()

  const { user } = useProfileStore()
  const { GetUsers } = useUsersStore()

useEffect(() => {
  if (user?.access_token) {
    GetUsers(user.access_token)
  }
}, [user?.access_token])

  return (
    <div>
      <h2>Пользователи</h2>
      <br />
      <Button onClick={() => openModal(<AddFormUser />)}>+</Button>
      <br />
      <br />

      <TableUsers />
    </div>
  )
}

export default Users
