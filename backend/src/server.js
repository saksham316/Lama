// --------------------------------------------------------Server Imports-----------------------------------------------------
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
import { app } from "./app.js";
import { mongo } from "./db/mongodb.js";
// ------------------------------------------------------------------------------------------------------------------------

const PORT = process.env.port || 6969;

// Creating mongodb connection
mongo();

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});

// Handling the Unhandled Rejected Promises
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection! Shutting Down");
  process.exit(1);
});
