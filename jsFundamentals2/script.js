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

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends);

// const yearsY = new Array(1991, 1984, 2008, 2020);
// console.log(yearsY);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas);
// console.log(jonas[jonas.length - 1]);

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];

// //add elements to array
// friends.push('Jay');

// console.log(friends);

// friends.unshift('John');

// console.log(friends);

// //remove elements to array

// friends.pop();
// const popped = friends.pop();
// console.log(friends);

// const unfriended = [popped];
// console.log(`Unfriended: ${popped}`);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven')); //returns the position of the element
// console.log(friends.indexOf('Bob')); //if not in array will return -1

// console.log(friends.includes('Steven')); //strict equality ===
// console.log(friends.includes('Bob'));

// friends.includes('Steven') ? console.log(`Friends`) : console.log(`Not friends`);

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20; //arrow function variable = parameter => condition ? true : false

// const bill = [125, 555, 44];
// const tips = [calcTip(bill[0]),calcTip(bill[1]), calcTip(bill[2])];
// console.log(tips);

// const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
// console.log(total);

//objects = format = variable = { properties: 'value', } Object Literal Syntax
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmendtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);
// console.log(`${jonas.firstName} is ${jonas.age} years old ${jonas.job}.`);

// const nameKey = 'Name';
// console.log(`${jonas['first' + nameKey]} is ${jonas['age']} years old ${jonas['job']}.`);


// let userChoice = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends");

// console.log(`Here's the info you need: ${jonas[userChoice]}`);

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas['friends'].length} friends, and his bestfriend is ${jonas.friends[0]}.`);

//object methods

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmendtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,
//     //using function as key and value pair
//     // calcAge: function(birthYear) {
//     //     return 2022 - birthYear;
//     // }
//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }
//     //any function that is attached to an object is a METHOD
//     calcAge: function (){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this['hasDriverLicense'] ? 'a' : 'no'} drivers license.`
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age)
//console.log(jonas['calcAge'](1993)); //using bracket notation

// console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${jonas['hasDriverLicense'] ? 'a' : 'no'} drivers license.`)

// console.log(jonas.getSummary());

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI
    }
}

mark.calcBMI();
john.calcBMI();

// console.log(`${mark.BMI > john.BMI ? mark.fullName : john.fullName}'s BMI
// (${mark.BMI > john.BMI ? mark.BMI : john.BMI}) is higher than
// `)
console.log(`-------------------------------`)
console.log(`${mark.BMI > john.BMI
            ? `${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s BMI ${john.BMI}.`
            : `${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s BMI ${mark.BMI}.`
}
`
);