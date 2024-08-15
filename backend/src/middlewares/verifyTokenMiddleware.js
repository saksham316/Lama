// -----------------------------------------------------Imports---------------------------------------------------------
import { asyncErrorHandler } from "../utils/Error/asyncErrorHandler";
// ---------------------------------------------------------------------------------------------------------------------

export const verifyToken = asyncErrorHandler((req, res, next) => {
  const cookies = req?.cookies;
  const token = cookies?.LAMA_TOKEN;

  // checking whether the cookie expired or not
  if (cookies && Object.keys(cookies).length > 0) {
    // if no token in the cookie then sending unauth status
    if (!token) {
      return next(new CustomError("Session Expired", 401));
    }
    // verifying the jwt token
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, user) => {
      if (error) {
        return next(new CustomError("Session Expired", 403));
      }
      next();
    });
  } else {
    // sending the unauth status if the cookie got expired
    return next(new CustomError("Session Expired", 401));
  }
});
