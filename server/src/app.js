//*This file have code that uses app.

const express = require('express');//import express function from express package
const morgan = require('morgan');//import morgan from the package
const createErrors = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');
const seedRouter = require('./routers/seedRouter');
const { errorResponse } = require('./controllers/responseController');

const app = express();//assign express function to app

// api limit middleware
const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, //1 minute
  max: 5, //limit
  message: "Too many request from this IP, please try again later."
});

// middleware
app.use(rateLimiter); //limit for all api calls
app.use(xssClean());
app.use(morgan('dev')); //"app.use()" from express, it applies the middleware to every endpoint
app.use(express.json()); //express built-in middleware to use json in req body (parses incoming requests with JSON payloads.)
app.use(express.urlencoded({ extended: true })); //express built-in middleware to work with form related data in req body(parses incoming requests with URL-encoded payloads.)

//using/linking api routers
app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);

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

//client error handling middleware
app.use((req, res, next) => {
  next(createErrors(404, "Route not found."));
});

//server error handling middleware -> all the endpoint errors will come here
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message
  });
});

module.exports = app;