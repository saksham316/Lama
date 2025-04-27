// -----------------------------------------------------------Imports----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

const PRODUCTION_URLS = [];
const DEVELOPMENT_URLS = ["http://localhost:3000", "http://localhost:5173"];

// corsConfig -- configuration for the cors handling
export const corsConfig = {
  origin:
    process.env.NODE_ENV === "production" ? PRODUCTION_URLS : DEVELOPMENT_URLS,
  credentials: true,
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
};
