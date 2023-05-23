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

//endpoints for products
app.get("/products", (req, res) => {
  res.status(200).send({
    message: "Products are sent."
  });
});

app.listen(3001, () => {
  console.log("KinoMart server is running at http://localhost:3001");
});