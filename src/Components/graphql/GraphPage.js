import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import { useHistory } from "react-router-dom";
import { GETALLPOSTS } from './query';
import { useQuery, gql } from '@apollo/client';
import client from './Helper';
import Model from '../Model';
import { useDispatch } from "react-redux";
import { MODEL_OPEN, MODEL_EDIT } from "../redux/types";


function GraphPage() {

  const { data } = useQuery(GETALLPOSTS, {
    variables: {
      options: {
        paginate: {
          limit: 50,
          page: 1
        }
      }
    },
  });

  console.log("allPosts", data?.posts);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch({ type:MODEL_OPEN , payload: true})
  }
  const handleClose = () => {
    dispatch({ type:MODEL_OPEN , payload: false})
  }

  const handleEdit = (item) => {
    handleOpen()
    dispatch({ type: MODEL_EDIT, payload: item})
  }

  return (
    <>
      <div className="searchBox" >
        <TextField label="search" id="search" variant="standard" />
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>userId</TableCell>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">title</TableCell>
              <TableCell align="center">body</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!data ?
              (
                <TableRow>                 
                    No Data Found!                  
                </TableRow>

              ) :
              <>
                {
                  data?.posts?.data?.length > 0 && data.posts.data.map((item) => (
                    <>
                      <TableRow
                        key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center" >{item.user.id}</TableCell>
                        <TableCell component="th" scope="row">{item.id}</TableCell>
                        <TableCell align="center" sx={{ width: "25%" }} >{item.title}</TableCell>
                        <TableCell align="center" sx={{ width: "36%" }}>{item.body}</TableCell>
                        <TableCell align="center">
                          <Button className="Action_btn" variant="contained">
                            View
                          </Button>
                          <Button className="Action_btn" variant="contained" color="success" onClick={() => handleEdit(item)}>
                            Edit
                          </Button>
                          <Button className="Action_btn" variant="outlined" color="error">
                            Delete
                          </Button>
                        </TableCell>
                        <p id="error"></p>
                      </TableRow>
                    </>
                  ))
                }

              </>
            }

          </TableBody>
        </Table>
      </TableContainer>

      <Model handleClose={handleClose}/>

    </>
  )
}

export default GraphPage;