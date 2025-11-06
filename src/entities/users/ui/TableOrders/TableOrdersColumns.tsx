import { Space } from 'antd';
import type { TableProps } from 'antd';

export const ordersTableColumns: TableProps<any>['columns'] = [

  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Номер',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Основной запрос чата',
    key: 'request',
    dataIndex: 'request',

  },
  {
    title: 'Действие',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Выполнить</a>
      </Space>
    ),
  },
];
