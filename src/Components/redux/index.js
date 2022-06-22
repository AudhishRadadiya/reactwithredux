// import { configureStore } from "@reduxjs/toolkit";
import { createStore , applyMiddleware, combineReducers } from 'redux';
import tableReducer from "./TableSlice";
import thunk from "redux-thunk";

// const store = configureStore({
//     reducer: {
//         table: tableReducer
//     },
// });

const rootReducer = combineReducers({
    table: tableReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
) 
export default store;