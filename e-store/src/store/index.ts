import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counter from "./slices/counterSlice";
import productList from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    counter,
    productList,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
