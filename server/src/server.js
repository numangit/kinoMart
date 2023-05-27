//this file have code to run the server
const app = require("./app");
const { serverPort } = require('./secret');

app.listen(serverPort, () => {
  console.log(`KinoMart server is running at http://localhost:${serverPort}`);
});