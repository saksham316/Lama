// -------------------------------------------------Imports------------------------------------------------------------
import { Router } from "express";
import {
  createProject,
  createProjectFile,
  getProjectFiles,
  getProjects,
} from "../../controllers/project/projectController.js";
// --------------------------------------------------------------------------------------------------------------------

export const projectRouter = Router();

projectRouter.route("/").get(getProjects).post(createProject);

projectRouter
  .route("/:project_id")
  .get(getProjectFiles)
  .post(createProjectFile);

