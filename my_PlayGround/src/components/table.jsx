import React, {useEffect, useState, useCallback} from 'react'
import { useDispatch, connect } from "react-redux";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { borderColor, color } from '@mui/system';
import { add } from "../features/myslice";
import Details from "./details";
import PrimarySearchAppBar from "./appBar"
import { VariableSizeList as List } from "react-window";


export const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    flex: 1
  },
  table: {
    // height: "100%",
    width: "100%"
  },
  list: {
    position:'absolute'
  },
  thead: {},
  tbody: {
    width: "100%"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    boxSizing: "border-box",
    // minWidth: "100%",
    width: "100%"
  },
  headerRow: {},
  cell: {
    display: "block",
    flexGrow: 0,
    flexShrink: 0
  },
  expandingCell: {
    flex: 1
  },
  column: {
    width:'10%'
  }
}));




function Datatable() {
// const navigate = useNavigate();
const getItemSize = () => Math.floor(Math.random() * 230) + 130;
const tableHeadWidth = () => document.getElementById("TableHeadId");
const classes = useStyles();
let history = useHistory();
const dispatch = useDispatch()
const [persons, setPersons] = useState([]);
const [selectedRow, setSelectedRow] = React.useState({});
useEffect(() => {
// const getTableData = () => 
{axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(res => {
    
  const persons =[...res.data];
  setPersons(persons);
})}
// const datas = useCallback(() =>

//  , [])
}, [])
const onRowClick = (e) => {
    // debugger
setSelectedRow(e);
// navigate('/Details',{state:e});
history.push("/Details",{e});
// history.push({
//   pathname: '/home',
//   search: '?update=true',  // query string
//   state: {  // location state
//     update: true, 
//   },
// });
}

//tabale
const Row = () => {
  // const item = items[index];

  return (
    <>
    {persons.map((row, index) => (
  <TableRow
  // sx={{ height: 'fit-content', overflow:'inherit' }}
  // component="div" className={classes.row} 
    key={row.id}
    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  onClick={() => onRowClick(row)}
  >
    <TableCell>
      {row.name}
    </TableCell>
    <TableCell>{row.username}</TableCell>
    <TableCell>{row.email}</TableCell>
    <TableCell>{row.phone}</TableCell>
    <TableCell><a target="_blank" href={'https://www.'+row.website}>{row.website}</a></TableCell>
    <TableCell>{row.phone}</TableCell>
    <TableCell>{row.phone}</TableCell>
    <TableCell>{row.phone}</TableCell>
  </TableRow>
))}
    </>
  );
};

const somefunc = () => {
    dispatch(add(persons))
}
somefunc();
  return (
    <Box >
        <PrimarySearchAppBar/>
    <Paper >
    <TableContainer>
      {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
      <Table >
        <TableHead id="TableHeadId">
          <TableRow>
            <TableCell>
            {/* name */}
            <TableCell padding='16px'> name</TableCell>
              <TableCell padding='16px'> username&nbsp;</TableCell>
              <TableCell padding='16px'> email&nbsp;(g)</TableCell>
              <TableCell padding='16px'>phone(g)</TableCell>
              <TableCell padding='16px'> website&nbsp;(g)</TableCell>
            </TableCell>
            {/* <TableCell >username</TableCell>
            <TableCell >email&nbsp;(g)</TableCell>
            <TableCell >phone&nbsp;(g)</TableCell>
            <TableCell >website&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody >
        <List
        className={classes.list}
        height={1000}
        // width={width}
        width={tableHeadWidth.clientWidth}
// width={persons.length * 100}
// height={persons.length * 100}
itemCount={persons.length}
itemSize={getItemSize}
overflow= {'inherit'}
// sx={{ height: 'fit-content', overflow:'inherit' }}
// rowRenderer={Row}
                
        // className={classes.list}
                // height={height}
                // width={width}
                // itemCount={Row.length}
                // itemSize={ROW_SIZE}
                // itemKey={itemKey}
                // itemData={itemData}
              >
                {Row}
              </List>
          {/* {persons.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            //   onRowClick={() => {
            //       console.log("onRowClick====",row);
            //       onRowClick(row);
            //     debugger
            //   }}
            onClick={() => onRowClick(row)}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right"><a target="_blank" href={'https://www.'+row.website}>{row.website}</a></TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper></Box>
  )
}
export default Datatable;
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(table)