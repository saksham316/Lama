// -------------------------------------------------Imports------------------------------------------------------------
import { Router } from "express";
import {
  deleteProjectFile,
  updateProjectFile,
} from "../../controllers/project/projectFileController.js";
import { verifyToken } from "../../middlewares/verifyTokenMiddleware.js";
// --------------------------------------------------------------------------------------------------------------------

export const projectFileRouter = Router();

projectFileRouter
  .route("/:project_file_id")
  .patch(verifyToken, updateProjectFile)
  .delete(verifyToken, deleteProjectFile);
