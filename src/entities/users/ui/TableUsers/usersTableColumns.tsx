import { UserTableType } from '@entities/profile/model/type';
import {  Space, Tag } from 'antd';
import type { TableProps } from 'antd';

export const usersTableColumns: TableProps<UserTableType>['columns'] = [

  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Permissions',
    key: 'permissions',
    dataIndex: 'permissions',
    render: (_, { permissions }) => (
      <>
        {permissions.map((permission:string) => {
          // let color = tag.length > 5 ? 'geekblue' : 'green';
          // if (tag === 'loser') {
          //   color = 'volcano';
          // }
          return (
            <Tag color='green' key={permission}>
              {permission.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Изменить </a>
        <a>Удалить</a>
      </Space>
    ),
  },
];
