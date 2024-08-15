// ------------------------------------------------------Express App Imports--------------------------------------------------
import express from "express";
import cors from "cors";
import morgan from "morgan";
// ----------------------------------------------------------------------------------------------------------------------------

export const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

process.env.NODE_ENV === "dev" && app.use(morgan("combined"));
