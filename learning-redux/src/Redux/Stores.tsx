import { configureStore } from "@reduxjs/toolkit";
import { productsApi, productSlices } from "./productApi";
export const myStore = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    productSlice: productSlices,
  },
  //middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
