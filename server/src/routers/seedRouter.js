const express = require('express');
const { seedUser } = require('../controllers/seedController');
const seedRouter = express.Router();

//NOTE: Seeding for texting purpose can be avoided if in hurry

seedRouter.get('/users', seedUser);

module.exports = seedRouter;