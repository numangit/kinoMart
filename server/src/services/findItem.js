/*
  * This file contains reuseable code for finding something by its id(eg: user,item, category)
  * PURPOSE: to maintain DRY code
  * (This step may be skipped and code can be written directly in the controller)
*/

const createErrors = require("http-errors");
const { default: mongoose } = require("mongoose");
const User = require("../models/userModel");

const findItemById = async (id, options = {}) => {
  try {
    const result = await User.findById(id, options);

    //throw error if no result found
    if (!result) throw createErrors(404, 'no result found with this id');

    return result;

  } catch (error) {
    //handling error from mongoose when an id is invalid
    if (error instanceof mongoose.Error) {
      throw createErrors(400, 'Invalid user ID');
    };
    throw error;
  };
};

module.exports = { findItemById };