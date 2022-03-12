"use strict";

//
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
})();
//CLOSURES
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// h();
// //
// f();

// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassenger(180, 3);
//immediately invoked function//one time use function IIEFI
//data encapsulation //making it private cause the variables inside cannot be called again
// (function () {
//   console.log("This will never run again");
// })(); //wrapping the function with no variable with paren() and adding () at the end
// (() => console.log("This will never run again2"))();
// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const userChoice = prompt(`${this.question}\n${this.options.join("\n")}
//     (Write option number)`);

//     if (userChoice >= 4) {
//       console.log(`Please choose only 0 - 4`);
//     } else {
//       this.answers[userChoice]++;
//       this.displayResults(this.answers);
//     }
//   },
//   displayResults(type) {
//     console.log(`Poll is ${type}`);
//     console.log(`[${[...type]}]`);
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// const display = poll.displayResults.bind(poll);

// display(data2);
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     //es6 way of putting function
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book("239", "Jonas Schmedthmann");
// lufthansa.book("634", "John Smith");
// console.log(lufthansa);
// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book; //reusable book

// // book(23, "Sarah Williams"); //this keyword is not usable at the top since its outside the function unless you use call/apply not going to work
// book.call(eurowings, 23, "Sarah Williams"); //if you would like to use another object for the function that's in the other function that using this keyword
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

// //apply method
// const flightData = [511, "George Cooper"];
// book.apply(eurowings, flightData);

// //best method
// book.call(lufthansa, ...flightData);
// console.log(lufthansa);

// //bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(23, "Steven Williams");

// const bookEW23 = book.bind(eurowings, 23); //partial application setting one parameter(flightNum)
// bookEW23("Jonas Schmedtmann");

// //with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//partial application : binding default value for one parameter/should be in order

// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));
// const addTax = function (value) {
//   return function (rate = 0.1) {
//     console.log(`${value + value * rate}`);
//   };
// };
// const addVat = addTax(200);
// addVat();

//function calling function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHey = greet("Hey");
// greetHey("Jonas");
// greetHey("Steven");

// greet("Hello")("Jonas");
//arrow function that function returns function
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// // greet("Hi")("ALex");
// const greetHey = greet("Hey");
// greetHey("Alex");
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// //higher order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`); //return the name of the function used
// };

// transformer("Javascript is the best!", upperFirstWord);
// transformer("Javascript is the best!", oneWord);

// const flight = "LH123";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport");
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);
//default parameters
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);
// createBooking("LH123", undefined, 1000); //you cannot skip parameters by blank
