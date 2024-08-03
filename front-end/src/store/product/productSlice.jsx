import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProducts
} from "./productThunk";

const initialState = {
  productLoader: false,
  error: null,
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Your synchronous reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productLoader = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productLoader = false;
        state.products = action.payload;
        // console.log("Data in Slice",state.products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productLoader = false;
        state.error = action.payload;
      })
    
    
  },
});

export default productSlice.reducer;
