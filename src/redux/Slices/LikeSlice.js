import { createSlice } from "@reduxjs/toolkit";


export const LikeSlice = createSlice({
    name:"like",
    initialState:[],
    reducers:{
        add:() => {},
        remove:() => {},
    }
})

export const {add,remove} = LikeSlice.actions;
export default LikeSlice.reducer;