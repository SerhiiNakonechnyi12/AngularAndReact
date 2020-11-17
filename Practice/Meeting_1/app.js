const http = require("http");
http
  .createServer((request, response) => {
    response.end("Hello world from js");
  })
  .listen(3000, "localhost", () => {
    console.log("Server starts in 3000 port");
  })
