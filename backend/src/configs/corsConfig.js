// -----------------------------------------------------------Imports----------------------------------------------------
import { APP_ENV } from "../utils/index.js";
// ----------------------------------------------------------------------------------------------------------------------

const PRODUCTION_URIS = [];
const DEVELOPMENT_URIS = ["https://localhost:3000"];

// corsConfig -- configuration for the cors handling
export const corsConfig = {
  origin: APP_ENV === "production" ? PRODUCTION_URIS : DEVELOPMENT_URIS,
  credentials: true,
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
};
