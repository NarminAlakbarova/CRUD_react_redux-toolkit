import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addCustomer = createAsyncThunk("addCustomer", async (data) => {
  const resp = await axios.post(
    "https://northwind.vercel.app/api/customers",
    data
  );

  return resp.data;
});

export const addCustomerSlice = createSlice({
  name: "addCustomer",
  initialState: {
    loading: false,
    error: null,
    data:null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCustomer.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  },
});


export default addCustomerSlice.reducer