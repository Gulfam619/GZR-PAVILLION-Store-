import { createSlice } from "@reduxjs/toolkit";
import { searchProduct } from "./SearchThunk";
const initialState = {
  productLoader: false,
  error: null,
  searchProducts: [],
};

export const searchSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {
    // Your synchronous reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProduct.pending, (state) => {
        state.productLoader = true;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.productLoader = false;
        state.searchProducts = action.payload;
        // console.log("Data in Slice",state.products);
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.productLoader = false;
        state.error = action.payload;
      })
    
    
  },
});

export default searchSlice.reducer;
