// -------------------------------------------------Imports------------------------------------------------------------
import mongoose, { Schema } from "mongoose";
// --------------------------------------------------------------------------------------------------------------------

// Project File Schema
const projectFileSchema = new Schema({
  name: {
    type: String,
    required: [true, "Project File Name is a required field"],
    minLength: 5,
    maxLength: 50,
  },
  description: {
    type: String,
    required: [true, "Project File Description is a required field"],
    minLength: 5,
    maxLength: 200,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "project",
    select: false,
  },
});

export const projectFileModel = mongoose.model(
  "projectFile",
  projectFileSchema
);
