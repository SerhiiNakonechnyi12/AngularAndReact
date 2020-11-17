console.log("Начало обработки");
setTimeout(function () {
  console.log("Вызов обработки через 0 мс");
}, 0);
setTimeout(function () {
  console.log("Вызов обработки через 100 мс");
}, 100);
setTimeout(function () {
  console.log("Вызов обработки через 500 мс");
}, 500);
console.log("Конец обработки");
