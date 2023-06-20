/*
  This file contains reuseable code for finding user to maintain DRY method. (This step may be skipped and code can be written directly in the controller)
*/

const User = require("../models/userModel");
const createErrors = require("http-errors");

const findUserById = async (id) => {
  const options = { password: 0 }; //exclude password field from users results
  const user = await User.findById(id, options);

  //throw error if no result found
  if (!user) throw createErrors(404, 'no user found with this id');
};

module.exports = { findUserById };