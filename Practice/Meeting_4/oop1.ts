class User {
  // name: string = "Serhii";
  // protected age: number;
  // constructor(userName: string, userAge: number){
  //     this.name = userName;
  //     this.age = userAge;
  // }
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  public get name(): string {
    return this._name;
  }
  showInfo(): void {
    console.log(`${this._name}, ${this._age} years old`);
  }
}
let user: User = new User("Serhii", 39);
//console.log(`${user.name}, ${user.age} years`);
user.showInfo();
console.log(user.name);

class Employee extends User {
  constructor(public position: string, name: string, age: number) {
    super(name, age);
  }
}
let teacher = new Employee("teacher", "Serhii", 39);
teacher.showInfo();
console.log(`Works on position: ${teacher.position}`);

interface IUser {
  id: number;
  name: string;
  age?: number;
}

let ivanov = {
  id: 5,
  name: "Serhii",
};

console.log(ivanov.name);

class Student implements IUser {
  constructor(public name: string, public id: number) {}
}

function createUser(name: string, id: number): IUser {
  return {
    name,
    id,
  };
}
ivanov = createUser("Petr", 7);
console.log(ivanov.name);

let vadim: User = new Employee("dean", "Vadym", 35);
console.log((<Employee>vadim).position);
console.log((vadim as Employee).position);
if (vadim instanceof Employee) console.log(`${vadim.name} работает`);
else console.log(`${vadim.name} свободный художник`);
