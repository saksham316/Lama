// -------------------------------------------------Imports------------------------------------------------------------
import { asyncErrorHandler } from "../../utils/Error/asyncErrorHandler.js";
import lodash from "lodash-es";
import { CustomError } from "../../utils/Error/customErrorHandler.js";
import { authModel } from "../../models/auth/authModel.js";
import { saveTokenToCookie } from "../../utils/cookie.js";
import { successRes } from "../../utils/index.js";
import { compareHashedPassword, signJwt } from "../../utils/helper.js";
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
    const doc = await authModel.findOne({ email }).select("+password");

    // if user doesn't exists then creating a entry of the user in the db
    if (!doc) {
      const authDoc = new authModel({ email, password });

      const document = await authDoc.save();
      const token = signJwt({ id: document._id.toString() });
      saveTokenToCookie(res, token);

      return successRes(res, 200, "User Logged In Successfully", { email });
    } else {
      // if user exists then comparing the users password
      const isMatched = await compareHashedPassword(
        password,
        doc.password,
        next
      );
      if (isMatched) {
        const token = signJwt({ id: doc._id });
        saveTokenToCookie(res, token);
        return successRes(res, 200, "User Logged In Successfully", { email });
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
