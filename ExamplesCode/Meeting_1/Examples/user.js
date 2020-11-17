function User(name, age){
    this.name = name;
    this.age = age;
    this.showInfo = function(){
        console.log(`${this.name}, ${this.age} years old`);
    }
}
User.prototype.sayHi = function(){
    console.log(`Привет от ${this.name}`);
}
module.exports = User;