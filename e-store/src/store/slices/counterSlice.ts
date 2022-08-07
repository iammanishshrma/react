import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Action = {
  payload: number;
  type: string;
};

type InitialState = {
  count: number;
};

const initialState: InitialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
      return state;
    },
    incremetByValue: (state, action: Action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state) => {
      state.count--;
      return state;
    },
  },
});

export const { increment, incremetByValue, decrement } = counterSlice.actions;

const counter = counterSlice.reducer;
export default counter;
