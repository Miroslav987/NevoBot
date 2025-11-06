import React from 'react';
import {  Table } from 'antd';
import { ordersTableColumns } from './TableOrdersColumns';




 const TableOrders: React.FC = () => {
 const dataSource =[
  {
    name: "Миро",
    number: '0551300049',
    request: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos a possimus, sunt error animi aperiam, atque aliquam molestias obcaecati non nisi voluptatibus consectetur. Cupiditate, fugiat. Quasi, quas. Quibusdam odit ipsum tempora neque vero dolorem sed, nisi et architecto praesentium id eius assumenda est expedita?  ',
    
 },  {
    name: "DOCOOIRV",
    number: '0551300049',
    request: ' Lorem, ipsum do ythythty tyy ty yt yhtlor  hsit amet consectetur adipisicing elit. Quos a possimus, sunt error animi aperiam, atque aliquam molestias obcaecati non nisi voluptatibus consectetur. Cupiditate, fugiat. Quasi, quas. Quibusdam odit ipsum tempora neque vero dolorem sed, nisi et architecto praesentium id eius assumenda est expedita hrthtyhythyt?  ',
    
 },]
  return <Table<any> columns={ordersTableColumns} dataSource={dataSource} />;
};

export default TableOrders;