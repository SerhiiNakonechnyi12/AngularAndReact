const http = require("http");
http.createServer((req, resp)=> {
resp.end("Hellp");
}).listen(3000, "localhost", ()=> {
    console.log("Server starts in 3000 port");
});