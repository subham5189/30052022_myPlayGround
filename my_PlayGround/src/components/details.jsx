import React from 'react'
import { useSelector } from "react-redux";
import {useLocation} from 'react-router-dom';

export default function Details() {
    const location = useLocation();
    debugger
    const tableData = useSelector((state)=>{
        // console.log("state",state);
        // state.tableData
    }
    )
    // console.table("tableData",tableData);
      return (
          <div>
<div>{location.state.e.name}</div>
<div>{location.state.e.username}</div>
<div>{location.state.e.email}</div>
<div>{location.state.e.phone}</div>
<div>{location.state.e.website}</div>

          </div>
  )
}