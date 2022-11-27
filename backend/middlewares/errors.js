const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errorMessage: err.message,
      errorStack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };
    error.message = err.message;

    // Wrong Mongoose Object ID Error
    if (err.name === "CastError") {
      const message = `Resource not found! Invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    // Handle Mongoose Validation Error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    // Handle Mongoose Duplicate Key Error
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered!!`;
      error = new ErrorHandler(message, 400);
    }

    // Handle Wrong JWT Error
    if (err.name === "JsonWebTokenError") {
      const message = `JSON Web Token is Invalid!! Please try again`;
      error = new ErrorHandler(message, 400);
    }

    // Handle Expired JWT Error
    if (err.name === "TokenExpiredError") {
      const message = `JSON Web Token is Expired!! Please try again`;
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
};
