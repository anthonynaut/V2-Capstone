import React, {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core';
import { ReviewsForm } from '../../components/ReviewsForm';

  interface gridData{
    data:{
      id?:string;
    }
  }

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    // {
      // field: 'fullName',
      // headerName: 'Full name',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      // width: 160,
      // valueGetter: (params: GridValueGetterParams)
        // `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  const rows = [
    { id: 1, lastName: 'poasx', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  ];
  
  export const DataTable =  () => {
    
    let { reviewData, getData } = useGetData();
    let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}})
  
  let handleOpen = () => {
    setOpen(true)
  }
  
  let handleClose = () => {
    setOpen(false)
  }
  
  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }
  
  console.log(gridData.data.id)
  


  return (
    <div style={{ height: 400, width: '100%' }}>
          <h2>Reviews</h2>
          <DataGrid rows={reviewData} columns={columns} pageSize={5} checkboxSelection/>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Review</DialogTitle>
          <DialogContent>
            <DialogContentText>Review</DialogContentText>
              <ReviewsForm id={gridData.data.id!}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
      );
    }
    






