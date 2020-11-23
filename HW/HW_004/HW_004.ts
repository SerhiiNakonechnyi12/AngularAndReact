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


- перенести в интерфейс авто , 
- вызвать в методе
*/

class MyTransport {
  private _name: string;
  private _model: string;
  private _color: string;
  private _price: number;
  constructor(name: string, model: string, color: string, price: number) {
    this._name = name;
    this._model = model;
    this._color = color;
    this._price = price;
  }
  public get name(): string {
    return this._name;
  }
    showInfo(): void {
        console.log(`
        Name: ${this._name}\n
        Model: ${this._model}\n
        Color: ${this._color}\n
        Price: ${this._price}\n
      `);
   }
}

class Car extends MyTransport {
  constructor(
    public vehicle: string,
    name: string,
    model: string,
    color: string,
    price: number
  ) {
    super(name, model, color, price);
  }
}

interface ITransport {
  id: number;
  name: string;
  model: string;
  color: string;
  price: number;
}

function createTransport(
  id: number,
  name: string,
  model: string,
  color: string,
  price: number
): ITransport {
  return {
    id,
    name,
    model,
    color,
    price,
  };
};

let car_1 = {
    id: 5,
    name: "Tesla",
    model: "Model S",
    color: "Red",
    price: "45000"
};
let car_2 = {
    id: 5,
    name: "BMW",
    model: "M5",
    color: "Black",
    price: "75000"
};

//let car_1: MyCar = new Car("Car","Tesla", "Model S", "Red", 45000);
//console.log((<Car> car_1).vehicle);
//console.log(createTransport.map(transport => 'Car: ' + car_1));

for (let i = 0; i< createTransport.length; i++){
console.log(showInfo());
}