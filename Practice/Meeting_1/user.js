function User(name, age) {
  this.name = name;
  this.age = age;
  this.showInfo = function () {
    console.log(`Имя: ${this.name} Возраст: ${this.age}`);
  };
}
User.prototype.sayHi = function () {
  console.log(`Привет от ${this.name}`);
};
module.exports = User;
