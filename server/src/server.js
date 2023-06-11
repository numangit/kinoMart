//this file have code to run the server
const app = require("./app");
const connectDB = require("./config/db");
const { serverPort } = require('./secret');

app.listen(serverPort, async () => {
  console.log(`KinoMart server is running at http://localhost:${serverPort}`);
  await connectDB(); //to connect mongodb after the server starts
});