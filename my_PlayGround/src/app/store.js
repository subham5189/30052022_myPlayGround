import { configureStore } from '@reduxjs/toolkit';
import myslice  from "../features/myslice";


export const store = configureStore({reducer: {tableData:myslice}})