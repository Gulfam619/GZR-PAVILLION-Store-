import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import backgroundSlice from "./background/backgroundSlice";
import productReducer from "./product/productSlice";
import productDetailsReducer from "./productDetails/productDetailSlice";
import  searchProductReducer  from "./searchProduct/SearchSlice";
const reducers = combineReducers({

//   background: backgroundSlice,
 product: productReducer,
 productDetails: productDetailsReducer,
 searchProduct: searchProductReducer
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
