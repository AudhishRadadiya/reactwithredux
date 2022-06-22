import { createContext,  } from 'react'

const Modelcontext = createContext ({
    open : false,
    edit : {
        id: null,
        useId: null,
        title: "",
        body: ""
    }, 
    setEdit: () => {},
});

export default Modelcontext;  