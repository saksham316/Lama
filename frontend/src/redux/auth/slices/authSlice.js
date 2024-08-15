// ------------------------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
// ------------------------------------------------------------------------------------------------------------------------

// auth initialState
const initialState = {
  userEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userEmail = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { login } = authSlice.actions; 
export const authReducer = authSlice.reducer;
