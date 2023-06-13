const express = require('express');
const { seedUser } = require('../controllers/seedController');
const seedRouter = express.Router();

//NOTE: Seeding for texting purpose can be avoided if in hurry

seedRouter.get('/', seedUser);

module.exports = seedRouter;