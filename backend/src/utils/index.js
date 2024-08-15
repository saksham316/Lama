// appEnv -- application working environment
export const APP_ENV = process.env.NODE_ENV;

// versionOne -- prepends api/v1 in the api endpoint
export const versionOne = (field) => {
  return `/api/v1/${field}`;
};

// successRes -- sending back the success response
export const successRes = (res, status, message, payload) => {
  return res.status(status).json({
    success: true,
    message,
    ...(payload && { data: payload }),
  });
};
