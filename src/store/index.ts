import { configureStore } from "@reduxjs/toolkit";
import { useSelector as _useSelector } from "react-redux";
import themeReducer from "./slices/theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector = _useSelector<RootState>;
