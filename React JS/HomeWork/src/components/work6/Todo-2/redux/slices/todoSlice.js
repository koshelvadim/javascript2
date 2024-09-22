import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
      };
      state.items.push(newTodo)
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => {
        return item.id !== action.payload
      })
    },
  }
})

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;