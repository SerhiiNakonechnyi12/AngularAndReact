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
/*
Задание 2. CW/HW_004
Создать абстрактный родительский класс транспортное средство
Transport. От него создать 3 производных класса (типы транспортных
средств), при необходимости переопределить методы базового класса
с применением метода super().
В классах использовать модификаторы (как в родительском классе,
так и в производных), а также аксессоры. Создать от производных
классов минимум по 2 экземпляра (модели транспортных средств).
Методы в производных классах должны выводить на экран все
свойства (описание автомобиля). Продумайте самостоятельно,
какие свойства в производных классах должны быть public,
какие – private и protected. Создайте массив транспортных
средств и выведите их характеристики в цикле.

- сделать команду для файла // +
- Motorcycle, Truck, Car // +

tsc --outfile dist/HW_004.js HW_004.ts -w


- перенести в интерфейс авто ,
- вызвать в методе
*/
var MyTransport = /** @class */ (function () {
    // private _name: string;
    // private _model: string;
    // private _color: string;
    // private _price: number;
    function MyTransport(id, name, model, color, price) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.color = color;
        this.price = price;
        // this._name = name;
        // this._model = model;
        // this._color = color;
        //this._price = price;
    }
    // id: number;
    // model: string;
    // color: string;
    // price: number;
    // public get name(): string {
    //   return this._name;
    // }
    MyTransport.prototype.showInfo = function () {
        console.log("\n        Name: " + this.name + "\n\n        Model: " + this.model + "\n\n        Color: " + this.color + "\n\n        Price: " + this.price + "\n\n      ");
    };
    return MyTransport;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(vehicle, id, name, model, color, price) {
        var _this = _super.call(this, id, name, model, color, price) || this;
        _this.vehicle = vehicle;
        return _this;
    }
    return Car;
}(MyTransport));
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(vehicle, id, name, model, color, price) {
        var _this = _super.call(this, id, name, model, color, price) || this;
        _this.vehicle = vehicle;
        return _this;
    }
    return Bus;
}(MyTransport));
// function createTransport(
//   id: number,
//   name: string,
//   model: string,
//   color: string,
//   price: number
// ): ITransport {
//   return {
//     id,
//     name,
//     model,
//     color,
//     price
//   };
// };
// let car_1 = {
//     id: 5,
//     name: "Tesla",
//     model: "Model S",
//     color: "Red",
//     price: "45000"
// };
// let car_2 = {
//     id: 5,
//     name: "BMW",
//     model: "M5",
//     color: "Black",
//     price: "75000"
// };
var car_1 = new Car("Car", 1, "Tesla", "Model S", "Red", 45000);
var bus_1 = new Bus("Bus", 1, "Bogdan", "12", "Yellow", 15000);
var transports = [];
transports.push(car_1);
transports.push(bus_1);
//console.log(transports);
for (var i = 0; i < transports.length; i++) {
    console.log(transports[i]);
}
;
// for (var index in transports){
//   console.log(transports[index]);
// }
// ============================
// class Car {
//   name: string;
//   constructor(name: string) {
//   }
// }
