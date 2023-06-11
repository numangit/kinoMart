const createErrors = require('http-errors');
const users = require('../models/userModel');

//endpoint logics/controls here
const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "Users data has been sent",
      users: users
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers
};