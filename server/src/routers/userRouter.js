const express = require("express");
const { getUsers } = require("../controllers/userController");
const userRouter = express.Router(); //getting the router function from express

//users endpoint
userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);

module.exports = userRouter;