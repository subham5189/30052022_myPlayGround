import { createSlice } from "@reduxjs/toolkit";

const myslice = createSlice({
    name:"tableData",
    initialState:[],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }

    }
})
export const {add} = myslice.actions
export default myslice.reducer;
