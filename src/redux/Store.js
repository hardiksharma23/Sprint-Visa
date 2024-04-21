import { configureStore } from "@reduxjs/toolkit";
import LikeSlice from "./Slices/LikeSlice";



export const store = configureStore({
    reducer:{
        like: LikeSlice.reducer,
    },
});