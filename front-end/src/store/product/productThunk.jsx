import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/utils/axios";
import { toast } from "react-hot-toast";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products?limit=${limit}&skip=0&select=`);
      
      if (response.status === 200) {
        // toast.success("Product Listed Successfully");
        // console.log("Response Data:",response.data.products); // Log response data for debugging
        return response.data.products;
      } else {
        toast.warning(response.detail);
      }
    } catch (error) {
      console.error("Error:", error); // Log the full error object for debugging
      return rejectWithValue(error.message); // Handle the error state in Redux
    }
  }
);
