import React, {useState} from 'react';
import Routes from './Routes';
import modelContext from './Components/Modelcontext';

export const App = () => {

  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const modelValue = {
    open, 
    setOpen,
    edit, 
    setEdit,
  }

  console.log("provider")
  return (
    <>
      <modelContext.Provider value={modelValue}> 
        <Routes/>
      </modelContext.Provider>
    </>
  )
}
export default App;
