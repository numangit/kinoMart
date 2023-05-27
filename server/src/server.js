//this file have code to run the server

const app = require("./app");

const port = process.env.SERVER_PORT || 3002;

app.listen(port, () => {
  console.log(`KinoMart server is running at http://localhost:${port}`);
});