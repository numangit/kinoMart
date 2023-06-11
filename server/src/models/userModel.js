const { Schema, model } = require('mongoose');
const { defaultUserImagePath } = require('../secret');
const bcrypt = required('bcrypt');

// NOTE: check mongoose doc if you don't understand the properties

const userSchema = new Schema({
  name: {
    type: string,
    required: [true, 'User name is required'],
    trim: true,
    minlength: [2, 'User name must be minimum 2 characters'],
    maxlength: [50, 'User name must be maximum 50 characters']
  },
  email: {
    type: string,
    required: [true, 'User email is required'],
    trim: true,
    unique: true,//to avoid same email being used
    lowercase: true,
    validate: { //to check validate if its an email
      validator: function (v) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      },
      message: 'Please enter a valid email'
    }
  },
  password: {
    type: string,
    required: [true, 'user password is required'],
    minlength: [6, 'password must be at least 6 characters'],
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)) //bcrypt function to encrypt password
  },
  image: {
    type: string,
    default: defaultUserImagePath
  },
  address: {
    type: string,
    required: [true, 'user address is required']
  },
  phone: {
    type: string,
    required: [true, 'user phone number is required']
  },
  isAdmin: {
    type: boolean,
    default: false
  },
  isBanned: {
    type: boolean,
    default: false
  }
}, { timestamps: true }); //timestamp tells us when a data is created and updated
