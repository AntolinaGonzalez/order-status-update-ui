import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'order_id', headerName: 'Order Id', width: 70 },
  { field: 'order_status', headerName: 'Order Status', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 }
];

//const FolderComponent: React.FC<Props> = ({ initialData, user }) => {
export const OrderStatusTable = ({result} : any) =>{
  console.log('hola')
  console.log(result)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={result}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
  
}