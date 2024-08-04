import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./feature/home/HomeSlice";
import SingleProductReducer from "./feature/product/ProductSlice";

export const store = configureStore({
  reducer: {
    allProduct: HomeReducer,
    singleProduct: SingleProductReducer,
  },
});
