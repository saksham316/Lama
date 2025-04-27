// ------------------------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./authAction";
import { toast } from "react-toastify";
// ------------------------------------------------------------------------------------------------------------------------

// auth initialState
const initialState = {
  loading: false,
  user: {},
  isUserLoggedin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isUserLoggedin = true;
        state.loading = false;
        toast.success("Logged in Successfully");
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isUserLoggedin = false;
        localStorage.clear();
        sessionStorage.clear();
        state.loading = false;
        toast.success("Logged out Successfully");
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
