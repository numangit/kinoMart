//This file is to handle the response

const errorResponse = (res, {
  statusCode = 500,
  message = "Internal Server Error"
}) => {
  return res.status(statusCode).json(
    {
      success: false,
      message: message
    }
  );
};

module.exports = { errorResponse };