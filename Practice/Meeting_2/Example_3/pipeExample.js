const fs = require("fs");
const zlib = require("zlib");
let writeStrem = fs.createWriteStream("some.txt.gz");
let readStream = fs.createReadStream("hello.txt", "utf8");
let gzStream = zlib.createGzip();
readStream.pipe(gzStream).pipe(writeStrem);
