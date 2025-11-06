import React from 'react'
import styles from './styles.module.scss'
import { Button, Table } from 'antd'
import { productTableColumns } from './productsColumnstable'
import { mockProducts } from '@entities/products/lib/mockData'
import { Product } from '@entities/products/model/types'
import { useModal } from '@shared/context/ModalProvider'
import AddFormProduct from '../AddFormProduct/AddFormProduct'

const TableProducts: React.FC = () => {
    const {openModal} = useModal()

  return <><div className={styles.blockBtn}><Button type='primary' onClick={()=>openModal(<AddFormProduct/>)} >Добавить товар</Button></div><Table<Product> columns={productTableColumns} dataSource={mockProducts} /></>
}
export default TableProducts
