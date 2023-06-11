const express = require("express");
const userRouter = express.Router(); //getting the router function from express

//dummy data
const users = [
  { id: 1, name: "Numan" },
  { id: 2, name: "Oban" },
  { id: 3, name: "Hassan" },
];

//users endpoint
userRouter.get('/', (req, res) => {
  res.status(200).send({
    message: "Users data has been sent",
    users: users
  });
});

module.exports = userRouter;