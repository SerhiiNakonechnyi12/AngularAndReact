const fs = require("fs");
//fs.writeFileSync("hello.txt", "Привет мир работы с файлами на Ноде", {encoding: "utf8"});
fs.writeFileSync(
  "hello.txt",
  "Привет мир работы с файлами на Ноде",
  { encoding: "utf8" },
  function () {
    console.log("Файл записан!");
    fs.readFile("hello.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
);

