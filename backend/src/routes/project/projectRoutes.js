// -------------------------------------------------Imports------------------------------------------------------------
import { Router } from "express";
import {
  createProject,
  createProjectFile,
  getProjectFiles,
  getProjects,
} from "../../controllers/project/projectController.js";
import { verifyToken } from "../../middlewares/verifyTokenMiddleware.js";
// --------------------------------------------------------------------------------------------------------------------

export const projectRouter = Router();

projectRouter
  .route("/")
  .get(verifyToken, getProjects)
  .post(verifyToken, createProject);

projectRouter
  .route("/:project_id")
  .get(verifyToken, getProjectFiles)
  .post(verifyToken, createProjectFile);
