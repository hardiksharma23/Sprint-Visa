import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "Hello World"}]
}


export const LikeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }
    }
})

export const {addTodo} = LikeSlice.actions;
export default LikeSlice.reducer;