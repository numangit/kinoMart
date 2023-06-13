const createErrors = require('http-errors');
const User = require('../models/userModel');

//endpoint logics/controls here

//get all users control
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send({
      message: "Users data has been sent",
      users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };