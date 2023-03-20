export const errorHandler = (error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMsg = error.message || "unkown error";

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMsg,
    stack: error.stack,
  });
};
