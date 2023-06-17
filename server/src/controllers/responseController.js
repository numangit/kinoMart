//This file is to handle the response

const errorResponse = (res, { statusCode, message }) => {
  return res.status(statusCode).json(
    {
      success: false,
      message: message
    }
  );
};

module.exports = { errorResponse };