import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { MODEL_EDIT } from "../Components/redux/types";
import modelContext from './Modelcontext';

const Submodel = (props) => {

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const [update, setUpdate] = useState({})

    // const {edit,open,handleOpen,handleClose,setEdit,updateRecord}=props
    const {handleClose, updateRecord, formdata, setFormdata} = props;
    const { edit, open, setEdit} = useContext(modelContext);
    
    const { model_open, edit_data } = useSelector(val => val.table)

    useEffect(() => {
  
      setUpdate(edit_data)
  
    },[edit_data])
  
 
    const handleChange = (e) => {        
      setUpdate({...update,[e.target.id]:e.target.value})
    }
 
    return (
    <div>
      <Modal
        // open={open}
        open={model_open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField id="id" label="id" variant="standard" value={update.id} disabled/><br/>
          <TextField id="userId" label="userId" variant="standard" value={update.user?.id} disabled/><br/>
          <TextField id="title" label="title" variant="standard" value={update.title} onChange={(e) => handleChange(e)} /><br/>
          <TextField id="body" label="body" variant="standard" value={update.body} onChange={(e) => handleChange(e)} />
          <Button variant="contained" onClick={() => updateRecord(update)}>
              Update
          </Button>
        </Box>
      </Modal>
  </div>
  )
}

export default Submodel;