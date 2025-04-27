import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_URL } from "../../configs/site.config";
import axios from "axios";

// login
export const login = createAsyncThunk(
  "auth/login",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${SERVER_URL}/auth/login`,
        data,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${SERVER_URL}/auth/logout`,
        data,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
