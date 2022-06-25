import { createContext } from 'react';

const modelContext = createContext ({
    open : false,
    edit : {
        id: null,
        useId: null,
        title: "",
        body: ""
    }, 
    setOpen: () => {},
    setEdit: () => {},
});
console.log("modelContext");

export default modelContext;  