// -------------------------------------------------Imports------------------------------------------------------------
import { asyncErrorHandler } from "../../utils/Error/asyncErrorHandler.js";
import lodash from "lodash-es";
import { CustomError } from "../../utils/Error/customErrorHandler.js";
import { successRes } from "../../utils/index.js";
import { projectModel } from "../../models/project/projectModel.js";
import { projectFileModel } from "../../models/project/projectFileModel.js";
// --------------------------------------------------------------------------------------------------------------------

// @url - /projects/
// @method - GET
export const getProjects = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.body;
  const projectDocs = await projectModel.find({ userId: id });
  if (!projectDocs.length) {
    return next(new CustomError("No Data Found", 404));
  }
  return successRes(res, 200, "Projects Found Successfully", projectDocs);
});

// @url - /projects/
// @method - POST
export const createProject = asyncErrorHandler(async (req, res, next) => {
  const { payload, id } = req.body;

  if (!payload) {
    return next(new CustomError("Payload is required", 400));
  }

  // sanitizedPayload -- payload after sanitization
  const sanitizedPayload = lodash.pick(payload, ["projectName"]);

  if (sanitizedPayload.projectName) {
    const projectDoc = new projectModel({
      projectName: sanitizedPayload.projectName,
      userId: id,
    });

    await projectDoc.save();

    return successRes(res, 201, "Project Created Successfully");
  } else {
    return next(new CustomError("Project Name is required", 400));
  }
});

// @url - /projects/:project_id
// @method - GET
export const getProjectFiles = asyncErrorHandler(async (req, res, next) => {
  const { project_id } = req.params;
  if (!project_id) {
    return next(new CustomError("Project Id is required", 400));
  }
  const projectFiles = await projectFileModel.find({ projectId: project_id });

  if (!projectFiles.length) {
    return next(new CustomError("No Data Found", 404));
  }
  return successRes(res, 200, "Projects Found Successfully", projectFiles);
});

// @url - /projects/:project_id
// @method - POST
export const createProjectFile = asyncErrorHandler(async (req, res, next) => {
  const { payload } = req.body;
  const project_id = req.params?.project_id ?? "";

  if (!project_id) {
    return next(new CustomError("Project Id is required", 400));
  }
  if (!payload) {
    return next(new CustomError("Payload is required", 400));
  }

  // sanitizedPayload -- payload after sanitization
  const sanitizedPayload = lodash.pick(payload, ["name", "description"]);

  if (sanitizedPayload.name && sanitizedPayload.description) {
    const projectFileDoc = new projectFileModel({
      ...sanitizedPayload,
      projectId: project_id,
    });

    await projectFileDoc.save();

    return successRes(res, 200, "Project File Created");
  } else {
    return next(new CustomError("Project Name/Description is required", 400));
  }
});
