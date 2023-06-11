const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: string,
    required: [true, 'username is required'],
    trim: true,
    minlength: [2, 'username must be minimum 2 characters'],
    maxlength: [50, 'username must be maximum 50 characters']
  }
});

module.exports = userSchema;