const express = require("express");
const { getUsers, getUserById, deleteUserById } = require("../controllers/userController");
const userRouter = express.Router(); //getting the router function from express

//users endpoint
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.delete('/:id', deleteUserById);

module.exports = userRouter;