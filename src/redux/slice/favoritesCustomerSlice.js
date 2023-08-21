import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesCustomerSlice = createSlice({
  name: "favCustomer",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
    state.favorites=  [...state.favorites, action.payload];
    },
    removeFavorites: (state, action) => {
    state.favorites=  [...state.favorites.filter((el) => el.id !== action.payload)];
    },
    removeAllFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorites, removeFavorites, removeAllFavorites } =
favoritesCustomerSlice.actions;

export default favoritesCustomerSlice.reducer;
