const express = require("express");//import express function from express package
const morgan = require("morgan");//import morgan from the package
const app = express();//assign express function to app

// middleware
app.use(morgan('dev'));
app.use(express.json()); //express built-in middleware to use json in req body
app.use(express.urlencoded({ extend: true })); //express built-in middleware to work with form related data in req body

//custom middleware
const isLoggedIn = (req, res, next) => {
  const logged = true;
  if (logged) {
    next();
  } else {
    return res.status(401).json({ message: 'Please log in.' });
  }
};
app.use(isLoggedIn)//this will apply the middleware to every endpoint

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
  });
});

//endpoints for user profile
app.get("/api/user", (req, res) => {
  res.status(200).send({
    message: "User profile is returned."
  });
});

app.listen(3001, () => {
  console.log("KinoMart server is running at http://localhost:3001");
});