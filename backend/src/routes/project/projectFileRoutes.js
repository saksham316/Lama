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
  .put(updateProjectFile)
  .delete(deleteProjectFile);
