import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favosites: [],
};

export const favositesCustomerSlice = createSlice({
  name: "favCustomer",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      [...state.favosites, action.payload];
    },
    removeFavorites: (state, action) => {
      [...state.favosites.filter((el) => el.id !== action.payload)];
    },
    removeAllFavorites: (state) => {
      [];
    },
  },
});

export const { addFavorites, removeFavorites, removeAllFavorites } =
  favositesCustomerSlice.actions;

export default favositesCustomerSlice.reducer;
