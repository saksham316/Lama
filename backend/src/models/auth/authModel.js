// -------------------------------------------------Imports------------------------------------------------------------
import mongoose, { Schema } from "mongoose";
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

authSchema.pre("save",function (){
    
})

export const authModel = mongoose.model("auth", authSchema);
