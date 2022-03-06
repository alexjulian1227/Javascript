'use strict'; //this mode will help you debug codes easier

//function declaration
// function logger() {
//     console.log('Hi, Im a function');
// }

// function fruitProcesser(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcesser(10, 20);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcesser(2, 4);

// console.log(appleOrangeJuice);


// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }

// const userAge = calcAge1(1994);
// console.log(userAge);

// //anonymous function declaration
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }

// const userAge2 = calcAge2(1994);
// console.log(userAge, userAge2);

// //arrow function
// const calcAge3 = birthYear => 2022 - birthYear;

// console.log(calcAge3(1993));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1994, 'Alex'));

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

// const calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3;


// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);
// console.log(avgDolphins, avgKoalas);

// function checkWinner(avgD, avgK) {
//     let msg;
//     if (avgD > avgK) {
//         msg = avgD >= 2 * avgK ? console.log(`Dolphin wins! (${avgD} vs. ${avgK})`) : console.log('No one wins!')
//     }
//     else {
//         msg = avgK >= 2 * avgD ? console.log(`Koala wins! (${avgK} vs. ${avgD})`) : console.log('No one wins!')
//     }
//     return msg;
// }

// checkWinner(avgDolphins, avgKoalas);

//arrays

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

const yearsY = new Array(1991, 1984, 2008, 2020);
console.log(yearsY);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas[jonas.length - 1]);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);