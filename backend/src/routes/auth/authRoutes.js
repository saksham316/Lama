// ------------------------------------------------------Imports-------------------------------------------------------------
import { Router } from "express";
import { login, logout } from "../../controllers/auth/authController.js";
// --------------------------------------------------------------------------------------------------------------------------

export const authRouter = Router();

// login route
authRouter.route("/login").post(login);

// logout route
authRouter.route("/logout").post(logout);
