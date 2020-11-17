const Emitter = require("events");
let emitter = new Emitter();
let eventName = "click";
emitter.on(eventName, (data) => {
  console.log(`Событие произошло. Инициатор: ${data}!`);
});
function processClick(d) {
  console.log(`${d} clicked!`);
}
emitter.on("keydown", () => {
  console.log("Нажата клавиша");
});
emitter.on(eventName, processClick);
emitter.emit(eventName, "Serhii");
emitter.emit("keydown");
