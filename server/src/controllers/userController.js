const createErrors = require('http-errors');
const User = require('../models/userModel');

//endpoint logics/controls here

//get all users control
const getUsers = async (req, res, next) => {
  try {
    const searchKeyword = req.query.search || "";
    const searchRegexp = new RegExp(".*" + searchKeyword + ".*", 'i'); //before or after search word doesn't matter and i is for case insensitive

    const filterQuery = {
      isAdmin: { $ne: true } //not admin
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