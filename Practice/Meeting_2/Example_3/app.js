function displayInfo(data, callback) {
  let rndNum = Math.random() * 10;
  let err = rndNum > 5 ? new Error("Ошибка выполнения. rndNum больше 5") : null;
  setTimeout(function () {
    callback(err, data);
  }, 0);
}
console.log("Начало обработки");
displayInfo("Выполнение обработки", function (err, data) {
  if (err) throw err;
  console.log(data);
});
console.log("Конец обработки!");
