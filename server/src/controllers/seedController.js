const User = require('../models/userModel');

const seedUser = async (req, res, next) => {
  try {
    //deleting all existing users
    const query = {}
    await User.deleteMany(query);

  } catch (error) {
    next(error);
  };
};

module.exports = {
  seedUser
};