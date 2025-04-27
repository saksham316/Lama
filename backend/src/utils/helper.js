// ----------------------------------------------------Imports---------------------------------------------------------
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { CustomError } from "./Error/customErrorHandler.js";
// --------------------------------------------------------------------------------------------------------------------

// hashPassword
export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    return next(new CustomError(error.message), 500);
  }
};

// compareHashedPassword
export const compareHashedPassword = async (password, hashedPassword, next) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    return next(new CustomError(error.message), 500);
  }
};

// signJwt
export const signJwt = (data) => {
  return jwt.sign(
    {
      ...(data && data),
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "12h" }
  );
};
