const EventEmitter = require("events");
let eventName = "greet";
class User extends EventEmitter {
  sayHi(data) {
    this.emit(eventName, data);
  }
}
let user = new User();
user.on(eventName, (d) => {
  console.log("Hello from " + d);
});
user.sayHi("Serhii");
