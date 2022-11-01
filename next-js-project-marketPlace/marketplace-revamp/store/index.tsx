import CookieReducer from "./Slices/cookieSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    cookie: CookieReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
