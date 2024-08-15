// -------------------------------------------------Imports------------------------------------------------------------
import { asyncErrorHandler } from "../../utils/Error/asyncErrorHandler.js";
import lodash from "lodash-es";
import { CustomError } from "../../utils/Error/customErrorHandler.js";
import { authModel } from "../../models/auth/authModel.js";
import { saveTokenToCookie } from "../../utils/cookie.js";
import { successRes } from "../../utils/index.js";
// --------------------------------------------------------------------------------------------------------------------

// @url - /auth/login
// @method - POST
export const login = asyncErrorHandler(async (req, res, next) => {
  const { payload } = req.body;

  if (!payload) {
    return next(new CustomError("Payload is required", 400));
  }

  // sanitizedPayload -- payload after sanitization
  const sanitizedPayload = lodash.pick(payload, ["email", "password"]);

  if (sanitizedPayload.email && sanitizedPayload.password) {
    const { email, password } = sanitizedPayload;
    const doc = authModel.findOne({ email });

    // saveTokenToCookie -- adding the cookie to the res object
    saveTokenToCookie();

    // if user doesn't exists then creating a entry of the user in the db
    if (!doc) {
      const authDoc = new authModel({ email, password });

      await authDoc.save();

      return successRes(res, 200, "User Logged In Successfully");
    } else {
      // if user exists then comparing the users password
      if (compareHashedPassword(password, doc.password)) {
        return successRes(res, 200, "User Logged In Successfully");
      } else {
        return next(new CustomError("Invalid Email/Password", 400));
      }
    }
  } else {
    return next(new CustomError("Email/Password is required", 400));
  }
});

// @url - /auth/logout
// @method - POST
export const logout = asyncErrorHandler(async (req, res, next) => {
  res.clearCookie("LAMA_TOKEN");

  return successRes(res, 200, "Logged Out Successfully");
});
