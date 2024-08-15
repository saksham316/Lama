// ------------------------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
// ------------------------------------------------------------------------------------------------------------------------

// auth initialState
const initialState = {
  crumbData: [],
};

const breadCrumbSlice = createSlice({
  name: "breadCrumb",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const breadCrumbReducer = breadCrumbSlice.reducer;
