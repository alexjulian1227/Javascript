"use strict";

//constructors
// const Person = function (firstName, birthYear) {
//   //instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person("Jonas", 1991);
// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 2010);
// console.log(jonas);
// console.log(matilda);
// console.log(jack);

// //new {} obj is created
// //the func is called , this = {}
// //{} linked to prototype
// //automatically returned to the constructor {}

// //prototype

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// //prototype linkedObjects
// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// console.log(jonas.__proto__.__proto__);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} speed is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
// this.speed -= 5;
// console.log(`${this.make} speed is going at ${this.speed}km/h`);
// };

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);

// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.brake();
// car1.brake();
// car1.brake();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" ")) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name.`);
//     }
//   }
//   //set a property that already exist
//   get fullName() {
//     return this._fullName;
//   }
//   //static method
//   static hey() {
//     console.log(`Hey there!`);
//   }
// }

// const jessica = new PersonCl("Jessica Davis", 1996);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// PersonCl.hey();

// const walter = new PersonCl("Walter White", 1965);
// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}.`);
// };

// jessica.greet();

//classes are not hoisted
//classes are first class citizen
//classes are executed in strict mode

//SETTERS AND GETTERS

// const account = {
//   owner: "Jonas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest); //getter

// account.latest = 50;
// console.log(account.movements);

//STATIC METHODS

//array.from = returns any array like structure to an array
//meaning you can only use not on the array

// const Person = function (firstName, birthYear) {
//   //instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   console.log(`Hey there!`);
// };

// Person.hey();
//jonas.hey() //this will not work only the Person constructor

//OBJECT CREATE
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

// steven.name = "Steven";
// steven.birthYear = 2002;

// steven.calcAge();

// class Car {
//   constructor(make, speed) {
//     (this.make = make), (this.speed = speed);
//   }

//   get speedUS() {
//     return `${this.speed / 1.6} mi/h`;
//   }

//   set speed(sp) {
//     this._speed = sp * 1.6;
//   }

//   get speed() {
//     return this._speed / 1.6;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} speed is going at ${this.speed}km/h`);
//   }

//   break() {
//     this.speed -= 5;
//     console.log(`${this.make} speed is going at ${this.speed}km/h`);
//   }
// }

// const ford = new Car("Ford", 120);

// console.log(ford);
// console.log(ford.speedUS);

// ford.accelerate();
// ford.break();

// ford.accelerate();

// ford.accelerate();
// console.log(ford.speedUS);
// ford.accelerate();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// //linking prototypes
// Student.prototype = Object.create(Person.prototype); //inheriting the Person constructor after creating the student constructor

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");
// Student.prototype.constructor = Student;
// console.log(mike.__proto__);
// mike.introduce();
// mike.calcAge();

// const Car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// Car.prototype.accelerate = function () {
//   this.speed += 20;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV("Tesla", 120, 23);

// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old.`);
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old but I fell like 35 :D`);
  }
}

const martha = new Student("Martha", 2012, "Computer Science");

console.log(martha);
martha.calcAge();
