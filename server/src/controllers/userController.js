const createErrors = require('http-errors');
const User = require('../models/userModel');

//endpoint logics/controls here

//get all users control
const getUsers = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;//page number for pagination
    const pageLimit = Number(req.query.limit) || 5; //data per page limit
    const searchKeyword = req.query.search || "";
    const searchRegexp = new RegExp(".*" + searchKeyword + ".*", 'i'); //before or after search word doesn't matter and i is for case insensitive

    //filtration and queries
    const filterQuery = {
      isAdmin: { $ne: true }, //not admin
      $or: [ //filter by searched name, email or phone
        { name: { $regex: searchRegexp } },
        { email: { $regex: searchRegexp } },
        { phone: { $regex: searchRegexp } },
      ]
    };
    const options = { password: 0 }; //exclude password field from users results

    const users = await User.find(filterQuery, options)
      .limit(pageLimit)
      .skip((page - 1) * pageLimit); //understand the pagination

    const count = await User.find(filterQuery).countDocuments(); //count of searched results

    //throw error if no result found
    if (!users) throw createErrors(404, 'no users found');

    res.status(200).send({
      message: "Users data has been sent",
      users,
      pagination: {
        totalPages: Math.ceil(count / pageLimit),
      }
    });

  } catch (error) {
    next(error);
  };
};

module.exports = { getUsers };