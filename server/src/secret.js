require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbURL = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/kinomart';
const defaultUserImagePath = process.env.DEFAULT_USER_IMAGE || 'public/images/users/default-user.png';

module.exports = { serverPort, mongodbURL, defaultUserImagePath };