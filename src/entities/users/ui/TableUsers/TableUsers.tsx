// import React from 'react';
// import {  Table } from 'antd';
// import { usersTableColumns } from './UsersTableColumns';
// import { UserType } from '@entities/profile/model/type';
// import {  PermissionsArr } from '@entities/users/lib/mockData';
// import { useUsersStore } from '@entities/users/model/store';




//  const TableUsers: React.FC = () => {
//   const { users } = useUsersStore()
//     const dataSource = users
//     ? users.map((user: UserType) => ({
//         key: user.user_id,
//         username: user.username,
//         email: user.email,
//         permissions: PermissionsArr(user.permissions),
//       }))
//     : []
  
//   return <Table columns={usersTableColumns} dataSource={dataSource} />;
// };

// export default TableUsers;


import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserType } from '@entities/profile/model/type';
import { PermissionsArr } from '@entities/users/lib/mockData';
import { useUsersStore } from '@entities/users/model/store';
import { usersTableColumns } from './usersTableColumns';

type UserTableRow = {
  key: string | null;
  username: string | null;
  email: string | null;
  permissions: string[];
};

const TableUsers: React.FC = () => {
  const { users } = useUsersStore();
  const dataSource = users
    ? users.map((user: UserType) => ({
        key: user.user_id,
        username: user.username,
        email: user.email,
        permissions: PermissionsArr(user.permissions),
      }))
    : [];

  return (
    <Table<UserTableRow>
      columns={usersTableColumns as unknown as ColumnsType<UserTableRow>}
      dataSource={dataSource}
    />
  );
};

export default TableUsers;