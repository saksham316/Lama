// saveTokenToCookie
export const saveTokenToCookie = (res, token) => {
  const currentDate = new Date();
  res.cookie("LAMA_TOKEN", token, {
    httpOnly: true,
    expires: new Date(currentDate.getTime() + 12 * 1000 * 60 * 60), // 1 hour expiry time
    ...(process.env.NODE_ENV !== "production"
      ? { sameSite: "lax" }
      : { sameSite: "none", secure: true }),
  });
};
