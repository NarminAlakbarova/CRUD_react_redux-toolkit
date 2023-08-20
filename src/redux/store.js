import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "../redux/slice/getDataSlice";
import favoritesReducer from "../redux/slice/favoritesCustomerSlice";

export const store = configureStore({
  reducer: {
    customers: getDataReducer,
    favCustomer:favoritesReducer,
  },
});
