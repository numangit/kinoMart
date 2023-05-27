//*This file have code that uses app.

const express = require('express');//import express function from express package
const morgan = require('morgan');//import morgan from the package
const createErrors = require('http-errors');
const xssClean = require('xss-clean');

const app = express();//assign express function to app

// middleware
app.use(xssClean());
app.use(morgan('dev')); //"app.use()" from express, it applies the middleware to every endpoint
app.use(express.json()); //express built-in middleware to use json in req body (parses incoming requests with JSON payloads.)
app.use(express.urlencoded({ extend: true })); //express built-in middleware to work with form related data in req body(parses incoming requests with URL-encoded payloads.)

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

//client error handling middleware
app.use((req, res, next) => {
  next(createErrors(404, "Route not found."));
});

//server error handling middleware -> all the endpoint errors will come here
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message
  });
});

module.exports = app;