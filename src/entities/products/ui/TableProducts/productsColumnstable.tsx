import { Image, Space,  } from 'antd'
import type { TableProps } from 'antd'

import { Product } from '../../model/types'

export const productTableColumns: TableProps<Product>['columns'] = [
    { title: 'Id', dataIndex: 'id', key: 'id', render: (text) => <a>{text}</a> },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (text) => <Image style={{ width: 50, height: 50 }} src={text} />,
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="small">
                {' '}
                <a>Изменить</a> <a>Удалить</a>{' '}
            </Space>
        ),
    },
]
