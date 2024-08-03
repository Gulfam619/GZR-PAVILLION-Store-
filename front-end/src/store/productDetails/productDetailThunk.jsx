import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/utils/axios";
import { toast } from "react-hot-toast";

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      
      if (response.status === 200) {
        // toast.success("Product Listed Successfully");
        console.log("Response of Product Details:",response.data); // Log response data for debugging
        return response.data;
      } else {
        toast.warning(response.detail);
      }
    } catch (error) {
      console.error("Error:", error); // Log the full error object for debugging
      return rejectWithValue(error.message); // Handle the error state in Redux
    }
  }
);
