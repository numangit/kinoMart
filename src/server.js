const express = require("express");//get express function from express package
const app = express();//assign express function to app

//endpoints
app.get("/", (req, res) => {
  res.send("Welcome to KinoMart server..");
});

app.listen(3001, () => {
  console.log("KinoMart server is running at http://localhost:3001");
});