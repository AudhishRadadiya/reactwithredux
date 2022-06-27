import { createContext } from 'react';

const modelContext = createContext ({
    open : false,
    edit : {}, 
    setOpen: () => {},
    setEdit: () => {},
});

export default modelContext;  