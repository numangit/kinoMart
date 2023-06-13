const createErrors = require('http-errors');
const User = require('../models/userModel');

//endpoint logics/controls here

//get all users control
const getUsers = async (req, res, next) => {
  try {
    const searchKeyword = req.query.search || "";

    const filterQuery = {
      isAdmin: { $ne: true }
    };

    const users = await User.find(filterQuery);
    res.status(200).send({
      message: "Users data has been sent",
      users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };