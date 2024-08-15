// ------------------------------------------------------Express App Imports--------------------------------------------------
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { corsConfig } from "./configs/corsConfig.js";
import { APP_ENV, versionOne } from "./utils/index.js";
import { authRouter } from "./routes/auth/authRoutes.js";
import { projectRouter } from "./routes/project/projectRoutes.js";
import { projectFileRouter } from "./routes/project/projectFileRoutes.js";
// ----------------------------------------------------------------------------------------------------------------------------

export const app = express();

// ------------------------------------------------------Cors Handling----------------------------------------------------------
app.use(cors(corsConfig));
// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------Morgan----------------------------------------------------------
APP_ENV === "development" && app.use(morgan("combined"));

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
  error.statusCode = error.statusCode || 500;
  return res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
});
// -------------------------------------------------------------------------------------------------------------------
