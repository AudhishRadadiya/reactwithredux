import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {
    GET_USER_SUCCESS,
    DATA_ERROR,
    GET_USER_DATA,
    MODEL_OPEN,
    MODEL_EDIT,
    UPDATE_USER_DATA,
    DELETE_USER_DATA,
    GET_OLD_USER_DATA
} from "./types";

const initialState ={
    model_open: false,
    user_data: [],
    row_data: [],
    edit_data: {},
    error: false,
    error_msg: "",
}

export default function tableReducer (state = initialState, action){
    switch (action.type) {       
        case GET_USER_DATA:
          return {
            ...state,
            user_data: action.payload
          };
          case GET_OLD_USER_DATA:
            return {
              ...state,
              row_data: action.payload
            };
        case MODEL_OPEN:
            return{
                ...state,
                model_open: action.payload
            };
        case MODEL_EDIT:
            return{
                ...state,   
                edit_data: action.payload
            };
        case UPDATE_USER_DATA:
  
            const index = state.user_data.findIndex((d) => d.id === action.payload.id);
            let oldData = [...state.user_data]
            oldData[index] = action.payload;  

            return{
                ...state,
                user_data: oldData
            };
        case DELETE_USER_DATA:
            const deleteData = state.user_data.filter((value) => value.id !== action.payload)
            return{
                ...state,
                user_data: deleteData 
            };
        default:
          return state;
      }
}


export const getData = () => {
    return async (dispatch) => {
        try{
            const userData = await axios.get("https://jsonplaceholder.typicode.com/posts")
           if(userData?.data){
                dispatch({ type: GET_USER_DATA, payload: userData.data })
                dispatch({ type: GET_OLD_USER_DATA, payload: userData.data })
           }
        }catch (err) {
            console.log(err);
        }
    }
}

export const updatedData = (update) => {
    return async (dispatch) => {
        try{
            const update_data = await axios.put(`https://jsonplaceholder.typicode.com/posts/${update.id}`, update)
            
            if(update_data){

                dispatch({ type: UPDATE_USER_DATA, payload: update_data.data })
            }
        }catch(err){
            console.log(err);
        }
    }
}

export const deleteData = (id) => {
    return async (dispatch) => {
        try{
            const delete_data = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}}`)

            if(delete_data){
                
                dispatch({ type:DELETE_USER_DATA, payload: id })
            }

        }catch(err){
            
        }
    }
}