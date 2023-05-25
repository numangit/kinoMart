const express = require("express");//import express function from express package
const morgan = require("morgan");//import morgan from the package
const app = express();//assign express function to app

//middle wares
app.use(morgan('dev'));

//endpoints
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to KinoMart server."
  });
});

//test endpoint
app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Server is working."
  })
})

//endpoints for user profile
app.get("/api/user", (req, res) => {
  res.status(200).send({
    message: "User profile is returned."
  });
});

app.listen(3001, () => {
  console.log("KinoMart server is running at http://localhost:3001");
});