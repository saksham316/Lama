// -------------------------------------------------Imports------------------------------------------------------------
import mongoose, { Schema } from "mongoose";
// --------------------------------------------------------------------------------------------------------------------

// Project Schema
const projectSchema = new Schema({
  projectName: {
    type: String,
    required: [true, "Project Name is a required field"],
    minLength: 5,
    maxLength: 50,
  },
  projectFiles: [
    {
      ref: "projectFile",
      projectFileId: Schema.Types.ObjectId,
    },
  ],
});

export const projectModel = mongoose.model("project", projectSchema);
