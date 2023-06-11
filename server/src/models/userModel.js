const { Schema, model } = require('mongoose');

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

});

module.exports = userSchema;