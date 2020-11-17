const { request, response } = require("express");
const express = require("express");
let app = express();
let message = "Hello world from Express server";
app.get("/", (request, response) => {
  console.log(message);
  response.end(message);
});
app.listen(3000, () => {
  console.log("Server is up!");
});
