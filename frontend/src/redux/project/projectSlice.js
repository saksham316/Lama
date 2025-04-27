// ------------------------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import {
  createProject,
  createProjectFile,
  getProjectFiles,
  getProjects,
  updateProjectFile,
} from "./projectAction";
import { toast } from "react-toastify";
// ------------------------------------------------------------------------------------------------------------------------

// project initialState
const initialState = {
  loading: false,
  projects: [],
  projectFiles: [],
  pathSlugs: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectPathSlugs: (state, action) => {
      state.pathSlugs = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getProjects lifecycle methods
    builder
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.projects = action.payload.data;
        state.loading = false;
      })
      .addCase(getProjects.rejected, (state) => {
        state.projects = [];
        state.loading = false;
      });

    // createProject lifecycle methods
    builder
      .addCase(createProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProject.fulfilled, (state) => {
        toast.success("Project Created Successfully");
        state.loading = false;
      })
      .addCase(createProject.rejected, (state) => {
        state.loading = false;
      });
    // createProjectFile lifecycle methods
    builder
      .addCase(createProjectFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProjectFile.fulfilled, (state) => {
        toast.success("Project File Created Successfully");
        state.loading = false;
      })
      .addCase(createProjectFile.rejected, (state) => {
        state.loading = false;
      });

    // getProjectFiles lifecycle methods
    builder
      .addCase(getProjectFiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjectFiles.fulfilled, (state, action) => {
        state.projectFiles = action.payload.data;
        state.loading = false;
      })
      .addCase(getProjectFiles.rejected, (state) => {
        state.projectFiles = [];
        state.loading = false;
      });
    // updateProjectFile lifecycle methods
    builder
      .addCase(updateProjectFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProjectFile.fulfilled, (state) => {
        toast.success("Project File Updated Successfully");
        state.loading = false;
      })
      .addCase(updateProjectFile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const projectReducer = projectSlice.reducer;
export const { setProjectPathSlugs } = projectSlice.actions;
