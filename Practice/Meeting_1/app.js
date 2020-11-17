// const http = require("http");
// http
//   .createServer((request, response) => {
//     response.end("Hello world from js");
//   })
//   .listen(3000, "localhost", () => {
//     console.log("Server starts in 3000 port");
//   });

//=====================

const http = require("http");
http
  .createServer((request, response) => {
    let path = request.url.split("/")[1].split("?")[0];
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.end(`<h1>Path: ${path}</h1>`)
    response.end(path);
  })
  .listen(3000, "localhost", () => {
    console.log("Server starts in 3000 port");
  });
