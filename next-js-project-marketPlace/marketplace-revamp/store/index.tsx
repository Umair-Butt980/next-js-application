import CookieReducer from "./Slices/cookieSlice";
import vendorSlice from "./Slices/vendorSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    cookie: CookieReducer,
    vendors: vendorSlice,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
