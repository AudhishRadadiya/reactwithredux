import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { MODEL_EDIT } from "../Components/redux/types";
import Modelcontext from './Modelcontext';

const Model = (props) => {

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
    
    const [update, setUpadet] = useState({})

    // const {edit,open,handleOpen,handleClose,setEdit,updateRecord}=props
    const {handleClose, updateRecord} = props;
    const { edit, open, setEdit} = useContext(Modelcontext);
    
    const { model_open, edit_data } = useSelector(val => val.table)
    const dispatch = useDispatch()
    console.log("update",update)

    useEffect(() => {
  
      setUpadet(edit_data)
  
    },[edit_data])
  
 
    const handleChange = (e) => {        
      setUpadet({...update,[e.target.id]:e.target.value})
      // dispatch(({ type:MODEL_EDIT, payload:e.target.value}))
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
          <TextField id="id" label="id" variant="standard" value={update.id} disabled/>
          <TextField id="userId" label="userId" variant="standard" value={update.userId} disabled/>
          <TextField id="title" label="title" variant="standard" value={update.title} onChange={(e) => handleChange(e)} />
          <TextField id="body" label="body" variant="standard" value={update.body} onChange={(e) => handleChange(e)} />
          <Button variant="contained" onClick={() => updateRecord(update)}>
              Update
          </Button>
        </Box>
      </Modal>
  </div>
  )
}

export default Model