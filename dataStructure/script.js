"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
// });
//destructuring objects

// const { name, openingHours, categories } = restaurant; //need the exact name of the object
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant; //if you want to name the key specifically

// const {
//   thu: { open: o, close: c }, //extreme by renaming the variable
// } = openingHours;
// console.log(o, c);

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant; //if you want to add default value for missing objects

// console.log(menu, starters);

// //mutating objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); //overriding existing values of variable
// console.log(a, b); //switching values to a different variable

// //nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//array destructuring breaks complex data structure to simpler structure

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; //destructuring //original array not affected//unpacking
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main]; //switching variables
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//nested destructuring
// const nested = [2, 4, [5, 6]];

// const [a, , [c, d]] = nested;
// console.log(a, c, d);

// //default values
// const [p = 1, q = 1, r = 1] = [8, 9]; //if the array is missing some value and still would like to unpack
// console.log(p, q, r);
