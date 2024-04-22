import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/Slices/LikeSlice"



export const store = configureStore({
    reducer: todoReducer
});