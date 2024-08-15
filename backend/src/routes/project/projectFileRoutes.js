// -------------------------------------------------Imports------------------------------------------------------------
import { Router } from "express";
import {
  deleteProjectFile,
  updateProjectFile,
} from "../../controllers/project/projectFileController.js";
// --------------------------------------------------------------------------------------------------------------------

export const projectFileRouter = Router();

projectFileRouter
  .route(["/", "/:project_file_id"])
  .put(verifyToken, updateProjectFile)
  .delete(verifyToken, deleteProjectFile);
