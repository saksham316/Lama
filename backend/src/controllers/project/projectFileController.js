// -------------------------------------------------Imports------------------------------------------------------------
import { asyncErrorHandler } from "../../utils/Error/asyncErrorHandler.js";
import lodash from "lodash-es";
import { CustomError } from "../../utils/Error/customErrorHandler.js";
import { successRes } from "../../utils/index.js";
import { projectModel } from "../../models/project/projectModel.js";
import { projectFileModel } from "../../models/project/projectFileModel.js";
// --------------------------------------------------------------------------------------------------------------------

// @url - /project-files/:project_file_id
// @method - PUT
export const updateProjectFile = asyncErrorHandler(async (req, res, next) => {
  const { project_file_id } = req.params;
  if (!project_file_id) {
    return next(new CustomError("Project File Id is required", 400));
  }
  if (!payload) {
    return successRes(
      res,
      200,
      "Project File Updated Successfully",
      projectFiles
    );
  }
  // sanitizedPayload -- payload after sanitization
  const sanitizedPayload = lodash.pick(payload, ["name", "description"]);

  const projectFile = await projectFileModel.findByIdAndUpdate(
    {
      _id: project_file_id,
    },
    {
      $set: sanitizedPayload,
    },
    {
      new: true,
    }
  );

  return successRes(res, 200, "Project File Updated Successfully", projectFile);
});

// @url - /project-files/:project_file_id
// @method - DELETE
export const deleteProjectFile = asyncErrorHandler(async (req, res, next) => {
  const { project_file_id } = req.params;

  if (!project_file_id) {
    return next(new CustomError("Project Id is required", 400));
  }

  const projectFile = await projectFileModel.findByIdAndDelete({
    _id: project_file_id,
  });

  return successRes(res, 200, "Project File Updated Successfully", projectFile);
});
