//module.exports = console.log("Привет мир Нода!");

let currentDate = new Date();
module.exports.date = currentDate; // поменять на date
module.exports.greetings = function (name) {
  let hours = currentDate.getHours();
  if (hours > 15) console.log(`Добрый вечер, ${name}`);
  else if (hours > 11) console.log(`Добрый день, ${name}`);
  else console.log(`Доброе утро, ${name}`);
};
