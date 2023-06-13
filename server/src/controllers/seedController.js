const data = require('../data');
const User = require('../models/userModel');

const seedUser = async (req, res, next) => {
  try {
    //deleting all existing users
    const deleteQuery = {};
    await User.deleteMany(deleteQuery);

    //inserting new users
    const users = await User.insertMany(data.users);

  } catch (error) {
    next(error);
  };
};

module.exports = {
  seedUser
};