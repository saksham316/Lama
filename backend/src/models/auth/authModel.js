// -------------------------------------------------Imports------------------------------------------------------------
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
// --------------------------------------------------------------------------------------------------------------------

// Auth Schema
const authSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is a required field"],
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
    select: false,
  },
});

authSchema.pre("save", async function (next) {
  try {
    if (this.password) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    } else {
      throw new Error("No Password Found");
    }
  } catch (err) {
    next(err); // Pass any errors to the next middleware
  }
});

export const authModel = mongoose.model("auth", authSchema, "auth");
