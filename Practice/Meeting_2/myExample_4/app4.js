// const express = require("express");
// const app = express();
// app.get("/", function(request, responce){
//     response.end("Hello from Express!");
// });
// app.listen(3000);

const http = require("http");
let message = "Hello World! Nodemon!"
http
  .createServer((request, response) => {
    console.log(message);
    response.end("Hello world from js");
  })
  .listen(3000, "localhost", () => {
    console.log("Server starts in 3000 port");
  });

// let name = process.argv[2];
// let age = process.argv[3];

// console.log("name: " + name);
// console.log("age: " + age);

// const http = require("http");
// let message = "Hello World! Nodemon!";
// http
//   .createServer(function (request, response) {
//     console.log(message);
//     response.end(message);
//   })
//   .listen(3000, () => {
//     console.log("Сервер начал прослушивание запросов на порту 3000");
//   });
