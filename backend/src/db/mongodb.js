// Imports---------------------------------------------------------------------------------------------------
import mongoose from "mongoose";
// -----------------------------------------------------------------------------------------------------------

// Mongo Database Connection handling
export const mongo = async () => {
  try {
    const MONGO_URL = `${process.env.MONGO_URL}`;
    await mongoose.connect(MONGO_URL);
    console.log("Connected to Mongo Database Successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error Connection to Database", error.message);
    } else {
      console.log("Error Connection to Database", error);
    }
  }
};
