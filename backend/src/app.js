// ------------------------------------------------------Express App Imports--------------------------------------------------
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { corsConfig } from "./configs/corsConfig.js";
import { versionOne } from "./utils/index.js";
import { authRouter } from "./routes/auth/authRoutes.js";
import { projectRouter } from "./routes/project/projectRoutes.js";
import { projectFileRouter } from "./routes/project/projectFileRoutes.js";
import { CustomError } from "./utils/Error/customErrorHandler.js";
// ----------------------------------------------------------------------------------------------------------------------------

export const app = express();

// ------------------------------------------------------Cors Handling----------------------------------------------------------
app.use(cors(corsConfig));
// ---------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------Cookie Parser----------------------------------------------------------
app.use(cookieParser()); // parses the incoming cookie

// ---------------------------------------------------------Morgan----------------------------------------------------------
process.env.NODE_ENV !== "production" && app.use(morgan("combined"));

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------Parsing Request Body----------------------------------------------------
app.use(express.json());
// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------Router------------------------------------------------------------
app.use(versionOne("auth"), authRouter); // authRouter
app.use(versionOne("projects"), projectRouter); // projectRouter
app.use(versionOne("project-files"), projectFileRouter); // projectFileRouter
// ---------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------Express App Error Handling------------------------------------------------------
app.all("*", (req, res, next) => {
  const err = new CustomError(`No such ${req.originalUrl} url exists`, 404);
  next(err);
});

app.use((error, req, res, next) => {
  console.log("ERROR:::", error.message);
  error.statusCode = error.statusCode || 500;
  return res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
});
// -------------------------------------------------------------------------------------------------------------------
