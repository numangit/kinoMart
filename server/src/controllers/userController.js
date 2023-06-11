const createErrors = require('http-errors');

//endpoint logics/controls here
const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "Users data has been sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers
};