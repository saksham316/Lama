import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slices/authSlice";
import { breadCrumbReducer } from "./breadCrumb/slices/breadCrumbSlice";

export const store = configureStore({
  reducer: { auth: authReducer, breadCrumb: breadCrumbReducer },
});
