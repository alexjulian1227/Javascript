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
//   this.speed -= 5;
//   console.log(`${this.make} speed is going at ${this.speed}km/h`);
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

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl("Jessica", 1996);

console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}.`);
};

jessica.greet();

//classes are not hoisted
//classes are first class citizen
//classes are executed in strict mode
