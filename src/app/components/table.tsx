import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { OrderStatus } from '@antoproject/dto/order-status';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'order_id', headerName: 'Order Id', width: 70 },
  { field: 'order_status', headerName: 'Order Status', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 }
];

//const FolderComponent: React.FC<Props> = ({ initialData, user }) => {
// export const OrderStatusTable = ({result} : any) =>{
//   console.log('hola')
//   console.log(result as Array<OrderStatus>)
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <h3>{result[0].id}</h3>
//       <DataGrid
//         rows={result}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
  
// }

export const OrderStatusTable = ({result : Array<OrderStatus>) =>{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell align="right">Order Status</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row: OrderStatus) => (
            <TableRow>
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