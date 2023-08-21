import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "../redux/slice/getDataSlice";
import favoritesReducer from "../redux/slice/favoritesCustomerSlice";
import addCustomerReducer from "../redux/slice/addCustomerSlice";
import editCustomerReducer from "../redux/slice/editCustomerSlice";

export const store = configureStore({
  reducer: {
    customers: getDataReducer,
    favCustomer: favoritesReducer,
    addCustomer: addCustomerReducer,
    editCustomer:editCustomerReducer
  },
});
