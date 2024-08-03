import { createSlice } from "@reduxjs/toolkit";
import {
    fetchProductDetails
} from "./productDetailThunk";

const initialState = {
  productLoader: false,
  error: null,
  productDetails: [],
  id: null
};

export const productDetailSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    productId: (state,action)=>{
      state.id = action.payload;
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.productLoader = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.productLoader = false;
        state.products = action.payload;
        console.log("Product Details in Slice",state.products);
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.productLoader = false;
        state.error = action.payload;
      })
    
    
  },
});
export const {productId} = productDetailSlice.actions;
export default productDetailSlice.reducer;
