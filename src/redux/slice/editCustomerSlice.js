import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const editCustomer = createAsyncThunk(
    "editCustomer",
    async ({ data, id }) => {
      const resp = await axios.patch(
        `https://northwind.vercel.app/api/customers/${id}`,
        data
      );
      return resp.data;
    }
  );
  

export const editCustomerSlice = createSlice({
  name: "editCustomer",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editCustomer.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  },
});


export default editCustomerSlice.reducer;