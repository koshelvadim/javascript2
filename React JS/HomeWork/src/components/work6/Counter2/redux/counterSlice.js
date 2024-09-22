import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    summa: 0,
    userName: "Nick",
  },

  reducers: {
    countPlus: (state) => {state.count += 1},
    countMinus: (state) => {state.count -= 1},
    countSumma: (state) => {
      state.summa += state.count;
    },
  }
})

export const { countPlus, countMinus, countSumma } = counterSlice.actions;
export default counterSlice.reducer;