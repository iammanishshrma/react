import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "types/productTypes";

type InitialState = {
  products: Product[];
};
type Action = {
  type: string;
  payload: Product[];
};

const initialState: InitialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk("fetchProducts", () => {
  const response = fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json);
  return response;
});

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action: Action) => {
      state.products = [...action.payload];
      return state;
    });
  },
});

const productList = productListSlice.reducer;
export default productList;
