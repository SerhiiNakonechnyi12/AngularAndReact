const { request, response } = require("express");
const express = require("express");
let app = express();
app.get("/", (request, response) => {
  response.end("Hello world from Express server");
});
app.listen(3000, () => {
  console.log("Server is up!");
});
