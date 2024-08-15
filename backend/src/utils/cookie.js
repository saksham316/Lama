import { APP_ENV } from "./index.js";

// saveTokenToCookie
export const saveTokenToCookie = (res) => {
  const currentDate = new Date();
  res.cookie("LAMA_TOKEN", {
    httpOnly: true,
    expires: new Date(currentDate.getTime() + 1000 * 60 * 60), // 1 hour expiry time
    sameSite: "none",
    ...(APP_ENV === "production" && { secure: true }),
  });
};
