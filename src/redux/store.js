import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/redux/api/api";
import productReducer from "@/redux/products/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
