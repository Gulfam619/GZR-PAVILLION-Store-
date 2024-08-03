import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/utils/axios";
import { toast } from "react-hot-toast";

export const searchProduct = createAsyncThunk(
  "searchProduct/searchProduct",
  async (search, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`products/search?q=${search}`);

      if (response.status === 200) {
        // toast.success("Product Listed Successfully");
        console.log("Response of Searched Product :",response.data); // Log response data for debugging
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

