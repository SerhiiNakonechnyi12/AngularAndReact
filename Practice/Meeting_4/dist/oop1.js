var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.showInfo = function () {
        console.log(this._name + ", " + this._age + " years old");
    };
    return User;
}());
var user = new User("Serhii", 39);
//console.log(`${user.name}, ${user.age} years`);
user.showInfo();
console.log(user.name);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(position, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(User));
var teacher = new Employee("teacher", "Serhii", 39);
teacher.showInfo();
console.log("Works on position: " + teacher.position);
var ivanov = {
    id: 5,
    name: "Serhii"
};
console.log(ivanov.name);
var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    return Student;
}());
function createUser(name, id) {
    return {
        name: name, id: id
    };
}
ivanov = createUser("Petr", 7);
console.log(ivanov.name);
var vadim = new Employee("dean", "Vadym", 35);
console.log(vadim.position);
console.log(vadim.position);
if (vadim instanceof Employee)
    console.log(vadim.name + " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
else
    console.log(vadim.name + " \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A");
