// --------------------------------------------------------Server Imports-----------------------------------------------------
import dotenv from "dotenv";
import { app } from "./app.js";
import { mongo } from "./db/mongodb.js";
// ------------------------------------------------------------------------------------------------------------------------

dotenv.config();
const PORT = process.env.port || 6969;

// Creating mongodb connection
mongo();

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});

// Handling the Unhandled Rejected Promises
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection! Shutting Down");
  app.close(() => {
    process.exit(1);
  });
});
