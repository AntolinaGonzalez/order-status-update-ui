import * as React from 'react';
import { OrderStatus } from '@antoproject/dto/order-status';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const OrderStatusTable = ({result}) =>{
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
          {result.map((row: OrderStatus) => (
            <TableRow>
              <TableCell key={row.id} style={{display:"none"}}></TableCell>
              <TableCell align="right">{row.order_id}</TableCell>
              <TableCell align="right">{row.order_status}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}