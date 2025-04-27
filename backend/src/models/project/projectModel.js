// -------------------------------------------------Imports------------------------------------------------------------
import mongoose, { Schema } from "mongoose";
// --------------------------------------------------------------------------------------------------------------------

// Project Schema
const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: [true, "Project Name is a required field"],
      minLength: 5,
      maxLength: 50,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "auth",
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const projectModel = mongoose.model("project", projectSchema, "project");
