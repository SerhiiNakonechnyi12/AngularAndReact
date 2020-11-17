const http = require("http");
http.createServer((request, response)=>{
    //request.
    let path = request.url.split("/")[1].split("?")[0];
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.end(`<h1>Path: ${path}</h1>`);    
}).listen(3000, "localhost", ()=>{
    console.log("Сервер начал прослушивание на порту 3000");
});