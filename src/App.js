import React, {useState} from 'react';
import Routes from './Components/Routes';
import Modelcontext from './Components/Modelcontext';

export const App = () => {

  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const modelValue = {
    open, 
    setOpen,
    edit, 
    setEdit,
    // handleOpen, 
    // handleClose, 
    //updateRecord, 
    // handleValueChange, 
  }
  return (
    <>
      <Modelcontext.Provider value={modelValue}> 
        <Routes/>
      </Modelcontext.Provider>
    </>
  )
}
export default App;
