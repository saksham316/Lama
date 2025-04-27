import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_URL } from "../../configs/site.config";
import axios from "axios";

// getProjects
export const getProjects = createAsyncThunk(
  "project/getProjects",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${SERVER_URL}/projects`,
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

// createProject
export const createProject = createAsyncThunk(
  "project/createProject",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${SERVER_URL}/projects`,
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

// getProjectFiles
export const getProjectFiles = createAsyncThunk(
  "project/getProjectFiles",
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${SERVER_URL}/projects/${id}`,
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

// createProjectFile
export const createProjectFile = createAsyncThunk(
  "project/createProjectFile",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${SERVER_URL}/projects/${data.id}`,
        data: { payload: data.payload },
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
// updateProjectFile
export const updateProjectFile = createAsyncThunk(
  "project/updateProjectFile",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${SERVER_URL}/project-files/${data.id}`,
        data: { payload: data.payload },
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
