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
        Id: ${this.id}\n
        Name: ${this.name}\n
        Model: ${this.model}\n
        Color: ${this.color}\n
        Price: ${this.price}\n
      `);
   }
}

class Car extends MyTransport {
  constructor(
    id: number,
    name: string,
    model: string,
    color: string,
    price: number,
  ) {
    super(id, name, model, color, price);
  }
}

class Bus extends MyTransport {
  constructor(
    id: number,
    name: string,
    model: string,
    color: string,
    price: number,
  ) {
    super(id, name, model, color, price);
  }
}

class Truck extends MyTransport {
  constructor(
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

const car_1 = new Car(1, "Tesla", "Model S", "Red", 45000);
const car_2 = new Car(2, "BMW", "X5", "Black", 75000);
const bus_1 = new Bus(3, "Ruta", "12", "Yellow", 15000);
const truck_1 = new Truck(4, "Man", "TGA", "White", 29000);

let transports: MyTransport[] = [];
transports.push(car_1);
transports.push(car_2);
transports.push(bus_1);
transports.push(truck_1);

for(let car of transports) {
  console.log(`Transport: ${car.id}`);
  console.log(car.showInfo());
}