"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  //es6 enhanced literals methods are function inside object
  order(starterIndex, mainIndex) {
    //creating methods
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //es6 enhanced object literals
  openingHours, //calling object outside the object
  //
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    return `Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`;
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// //with optional chaining
// console.log(restaurant.openingHours.mon?.open);
//enhanced object literals

//for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//map like objects use key and value
//map keys can have any type unlike objects that keys can only be strings

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are close");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// console.log(rest);

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));

// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);

// console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again"],
]);
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);
//1
// const [events] = new Set(gameEvents.entries());
// console.log([...events]);
// console.log(typeof events);
const events = gameEvents.entries();
console.log(events);

for (const [key, value] of events) {
  key <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}
//2
// gameEvents.delete(64);
// console.log(gameEvents);
//3
//"An event happened, on average, every 9 minutes"
// const eventsInterval = [...gameEvents.keys()];

// console.log(
//   `An event happened, on average, every ${90 / eventsInterval.length} minutes`
// );
//4

// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

// console.log(question);

// //convert obj to maps
// const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt("Your answer : "));
// console.log(question.get(question.get("correct") === answer));
//convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

//set iterables with NO DUPLICATES
//no order/index like arrays
// const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta"]);

// console.log(orderSet);
// console.log(new Set("Jonas"));

// console.log(orderSet.size);
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("Bread"));
// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");

// orderSet.delete("Risotto");

// for (const order of orderSet) console.log(order);

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffSet = [...new Set(staff)]; //easily converting set to array using spread operator to remove duplicates
// console.log(staffSet);

// console.log(new Set("jonasschmedtmann").size);
// Odd of victory Bayern Munich: 1.33
// const odds = Object.entries(game.odds);

// for (const [i, e] of odds) {
//   const modStr = `${game[i] ? `Odd of victory ${game[i]}` : `Odd of draw`}`;
//   console.log(`${modStr}: ${e}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// console.log(average / odds.length);
// const entries = game.scored.entries();
// for (const [i, e] of entries) {
//   console.log(`Goal ${i + 1}: ${e}`);
// }

// const average = Object.values(game.odds);
// const y = average.length;
// let sum = 0;
// for (const x of average) {
//   if (x < y + 1) {
//     sum += x;
//   } else {
//     sum += x;
//     sum / 3;
//     console.log(sum);
//   }
// }

// const gameOdds = Object.entries(game.odds);

// for (const [key, values] of gameOdds) {
//   console.log(`Odd of victory ${game[key] ?? "draw"} ${values}`);
// }
// Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:

// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
//  }

// Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �

// const [players1, players2] = game.players;
// console.log(players1);
// for (const [i, e] of players1.entries()) {
//   console.log(`${i + 1}: ${e}`);
// }

// for (const [i, e] of players2.entries()) {
//   console.log(`${i + 1}: ${e}`);
// }
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(`Goal Keeper: ${gk}`);
// console.log(`Field Players: ${fieldPlayers}`);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// // printGoals("Davies", "Muller");
// printGoals(...game.scored);

// team1 < team2 && console.log("Team 1 is more likely to win");
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
//nullish coalescing operator (nuill and undefined) 0 & "" will not be treated as falsy value
// restaurant.numGuest = 0;

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);
//short circuiting OR
// console.log(3 || "Jonas");
// console.log("" || "JOnas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// //if the first operand is a truthy the next will not be evaluated

// // restaurant.numGuest = 23;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10; //good for setting up default value for missing keys
// console.log(guest2);

//short circuit AND will evaluate truthy value and will stop if falsy value found or the last truthy element if all are truthy
// console.log(0 && "Jonas");
// console.log(7 && "JOnas");

// console.log("Hello" && 23 && null & "Jonas");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }
// //execute code in the second operand if the first evaluate is true
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
//rest pattern //collects the unused parameter or remaining elements
// const arr = [1, 2, ...[3, 4]]; //spread operator because its on right side

// const [a, b, ...others] = [1, 2, 3, 4, 5]; //rest because we collect at the end
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   //will get all the rest/remaining elements inside array// rest only needs to be on the last part of arr to get the rest
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); //will get only the rest pattern since we specify the sat on another variable and output the rest of the remaining opening hours inside restaurant

// //functions
// const add = function (...numbers) {
//   //unlimited # parameter depends on the array
//   //rest paramenter
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };

// add(2, 3);
// add(5, 3, 7, 2);
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onions", "olives", "spinach"); //unlimited parameter with rest arguments
// restaurant.orderPizza("mushrooms");
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt("Let's make pasta! Ingredient 2? "),
//   prompt("Let's make pasta! Ingredient 3? "),
// ];

// console.log(restaurant.orderPasta(...ingredients));

//objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guissepi" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";

// console.log(restaurantCopy.name);
// console.log(restaurant.name);
//spread operator //cannot create new variables unlike destructuring
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr); //if we need to use individually or passing multiple elements to a function

// const newMenu = [...restaurant.mainMenu, "Gnocci"]; //completely new array
// // console.log(newMenu);
// //copy array
// const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy of the existing array
// //join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables = arrays, string, map, set NOT objects

// const str = "Jonas";
// const letters = [...str, "", "s"];
// console.log(letters);

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
