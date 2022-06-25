import "../App.css";
import axios from 'axios';
import React, { useState, useEffect, useContext } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Model from "./Model";
import TextField from '@mui/material/TextField';
import TablePagination from '@mui/material/TablePagination';
import modelContext from "./Modelcontext";
// import Pagination from "./Components/Pagination";
// export const MyContext = React.createContext();
import { useSelector, useDispatch } from "react-redux";
import { getData, updatedData, deleteData } from "./redux/TableSlice";
import { MODEL_OPEN, MODEL_EDIT, GET_USER_DATA } from "./redux/types";
import { useHistory } from "react-router-dom";
import client from "./graphql/Helper";


function Home() {

  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [page, setPage] = useState(0)

  //   const [edit, setEdit] = useState({});
  //   const [delete, setDelete] = useState({});
  //   const [open, setOpen] = useState(false);

  console.log("client",client)  

  const { setOpen, edit, setEdit } = useContext(modelContext)

  const { user_data, edit_data, row_data } = useSelector(val => val.table)
  const dispatch = useDispatch();

  const history = useHistory();

  // const handleOpen = () => {setOpen(true)}
  // const handleClose = () => {setEdit(true)}

  const handleOpen = () => { dispatch({ type: MODEL_OPEN, payload: true }) };
  const handleClose = () => { dispatch({ type: MODEL_OPEN, payload: false }) };

  useEffect(() => {
    
    dispatch(getData())
    // setData()
    // setRowdata()

  },[])


  const handleEdit = (id) => {

    try{
      handleOpen();
      const findData = user_data.find((value) => value.id === id);
      dispatch(({ type: MODEL_EDIT, payload: findData }));
    }
    catch(error){
      console.log(error)
    }
    // setEdit(findData)
  }

  const updateRecord = (update) => {
  
    try {
      dispatch(updatedData(update))
      handleClose()

      // const data = await axios.put(`https://jsonplaceholder.typicode.com/posts/${edit.id}`, edit)
      // const index = data.findIndex((d) => d.id === data.data.id);
      // let oldData = [...data]
      // oldData[index] = data.data;
      // setData(oldData)
      // handleClose()
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {

    dispatch(deleteData(id))
    
    // const delete_data = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}}`)

    // if (delete_data) {
    //   const find_data = data.filter((value) => value.id !== id);
    //   setData(find_data)
    // }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)

    if (e.target.value.length > 0) {
      let result = user_data.filter(o => o.title.includes(e.target.value));
      dispatch({ type:GET_USER_DATA, payload:result})
      // setData(result);
    }
    else if (e.target.value === "" || e.target.value.length === 0) {
      dispatch({ type:GET_USER_DATA, payload: row_data})
      // setData(rowData)
    }
  }

  const handleChangePage = (event, newPage) => {
    console.log("newPage",event,newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("newPage", event)
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="searchBox" >
        <TextField label="search" id="search" variant="standard" value={search} onChange={(e) => handleChange(e)} />
      </div>
      {/* <Button variant="contained" onClick={handleSearch}>Search</Button> */}
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>userId</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">title</TableCell>
              <TableCell align="right">body</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user_data.length === 0 ?
              ("Data not found") :
              user_data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <>
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.userId}
                    </TableCell>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center" sx={{ width: "25%" }} >{row.title}</TableCell>
                    <TableCell align="center" sx={{ width: "36%" }}>{row.body}</TableCell>
                    <TableCell align="center">
                      <Button className="Action_btn" variant="contained">
                        View
                      </Button>
                      <Button className="Action_btn" variant="contained" color="success" onClick={() => handleEdit(row.id)}>
                        Edit
                      </Button>
                      <Button className="Action_btn" variant="outlined" color="error" onClick={() => handleDelete(row.id)}>
                        Delete
                      </Button>
                    </TableCell>
                    <p id="error"></p>
                  </TableRow>
                </>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 75, 100]}
          component="div"
          count={user_data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      {/* <button onClick={() => history.push("/about/123456/xyz", {frm: "HomePage"})}>GO ABOUT PAGE</button> */}
      <button onClick={() => history.push("/about/123456/xyz", {frm: "HomePage"})}>GO ABOUT PAGE</button>
      </TableContainer>

      <Model updateRecord={updateRecord} handleClose={handleClose} />

      {/* <Modelcontext.Provider value={modelValue}> 
      </Modelcontext.Provider> */}

      {/* <Model handleOpen={handleOpen} handleClose={handleClose} open={open} edit={edit} setEdit={setEdit} updateRecord={updateRecord} /> */}
      {/* <Pagination count={pageCount} onClick={handleChange} color="primary" className="pagination"/> */}

    </>
  );
}

export default Home;
