import { configureStore } from "@reduxjs/toolkit";
import { DataApi } from "./DataApi";
import { cartSlice } from "./cartSlice";

export const myStore = configureStore({
  reducer: {
    [DataApi.reducerPath]: DataApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(DataApi.middleware),
});

export type myRootState = ReturnType<typeof myStore.getState>;
export type myAppDispatch = typeof myStore.dispatch;
