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

class MyTransport implements ITransport{
  // private _name: string;
  // private _model: string;
  // private _color: string;
  // private _price: number;
  constructor(public id: number, public name: string, public model: string, public color: string, public price: number) {
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
    showInfo(): void {
        console.log(`
        Name: ${this.name}\n
        Model: ${this.model}\n
        Color: ${this.color}\n
        Price: ${this.price}\n
      `);
   }
}

class Car extends MyTransport {
  constructor(
    public vehicle: string,
    id: number,
    name: string,
    model: string,
    color: string,
    price: number
  ) {
    super(id, name, model, color, price);
  }
}

class Bus extends MyTransport {
  constructor(
    public vehicle: string,
    id: number,
    name: string,
    model: string,
    color: string,
    price: number
  ) {
    super(id, name, model, color, price);
  }
}

interface ITransport {
  id: number;
  name: string;
  model: string;
  color: string;
  price: number;
  //showInfo();
 
}

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

const car_1 = new Car("Car", 1, "Tesla", "Model S", "Red", 45000);
const bus_1 = new Bus("Bus", 1, "Bogdan", "12", "Yellow", 15000);

let transports: MyTransport[] = [];
transports.push(car_1);
transports.push(bus_1);

//console.log(transports);

for (var i=0; i < transports.length; i++) {
  console.log(transports[i]);
};

// for (var index in transports){
//   console.log(transports[index]);
// }

// ============================

// class Car {
//   name: string;
//   constructor(name: string) {

//   }
// }