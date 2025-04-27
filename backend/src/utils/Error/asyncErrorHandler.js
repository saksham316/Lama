// asyncErrorHandler -- handler to handle the async functions error
export const asyncErrorHandler = (func) => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch((error) => next(error));
  };
};
