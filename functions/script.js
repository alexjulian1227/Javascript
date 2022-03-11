"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    //es6 way of putting function
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book("239", "Jonas Schmedthmann");
lufthansa.book("634", "John Smith");
console.log(lufthansa);
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; //reusable book

// book(23, "Sarah Williams"); //this keyword is not usable at the top since its outside the function unless you use call/apply not going to work
book.call(eurowings, 23, "Sarah Williams"); //if you would like to use another object for the function that's in the other function that using this keyword
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

//apply method
const flightData = [511, "George Cooper"];
book.apply(eurowings, flightData);
//best method
book.call(lufthansa, ...flightData);
console.log(lufthansa);
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
