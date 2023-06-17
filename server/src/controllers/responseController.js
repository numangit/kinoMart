/*
- This file is for generic functions for error response and success response
- we used '=' instead of ':' in the object to set default values.
*/

const errorResponse = (res,
  { statusCode = 500, message = "Internal Server Error" }) => {
  return res.status(statusCode).json({
    success: false,
    message: message
  });
};

const successResponse = (res,
  { statusCode = 200, message = "Success", payload = {} }) => {
  return res.status(statusCode).json({
    statusCode: 200,
    message,
    payload,
  });
};

module.exports = { errorResponse, successResponse };