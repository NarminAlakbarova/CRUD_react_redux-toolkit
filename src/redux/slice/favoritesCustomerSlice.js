import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favosites: [],
};

export const favositesCustomerSlice = createSlice({
  name: "favCustomer",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favosites.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favosites = state.favosites.filter((el) => el.id !== action.payload);
    },
    removeAllFavorites: (state) => {
      state.favosites = [];
    },
  },
});

export const { addFavorites, removeFavorites, removeAllFavorites } =
  favositesCustomerSlice.actions;

export default favositesCustomerSlice.reducer;
