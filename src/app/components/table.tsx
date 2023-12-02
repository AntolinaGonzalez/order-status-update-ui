import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getOrderStatus } from '@antoproject/db/repository/getOrderStatus';

interface OrderStatus {
  id: string
  order_id: string
  order_status: string
  description: string
}

export const OrderStatusTable = async () =>{
  const items = await getOrderStatus() as Array<OrderStatus>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Order Id</TableCell>
            <TableCell align="right">Order Status</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item: OrderStatus) => (
            <TableRow key={item.id}>
              <TableCell align="right">{item.order_id}</TableCell>
              <TableCell align="right">{item.order_status}</TableCell>
              <TableCell align="right">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}