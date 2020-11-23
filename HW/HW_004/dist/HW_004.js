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
Задание 2.
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
- Motorcycle, Truck, Car

tsc --outfile dist/HW_004.js HW_004.ts -w

*/
var MyTransport = /** @class */ (function () {
    function MyTransport(name, model, color, price) {
        this._name = name;
        this._model = model;
        this._color = color;
        this._price = price;
    }
    Object.defineProperty(MyTransport.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return MyTransport;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(vehicle, name, model, color, price) {
        var _this = _super.call(this, name, model, color, price) || this;
        _this.vehicle = vehicle;
        return _this;
    }
    return Car;
}(MyTransport));
function createTransport(id, name, model, color, price) {
    return {
        id: id,
        name: name,
        model: model,
        color: color,
        price: price
    };
}
;
var car_1 = {
    id: 5,
    name: "Tesla",
    model: "Model S",
    color: "Red",
    price: "45000"
};
//let car_1: MyCar = new Car("Car","Tesla", "Model S", "Red", 45000);
//console.log((<Car> car_1).vehicle);
console.log(createTransport.map(function (transport) { return 'Car: ' + car_1; }));
