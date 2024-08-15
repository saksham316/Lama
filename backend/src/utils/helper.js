// ----------------------------------------------------Imports---------------------------------------------------------
import bcrypt from "bcryptjs";
import { CustomError } from "./Error/customErrorHandler";
import jwt from "jsonwebtoken";
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
export const compareHashedPassword = async (password, hashedPassword) => {
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
    { expiresIn: "1h" }
  );
};
