// let js = "amazing";

// if (js === "amazing") {
//     console.log("Javascript is FUN");
// }

// else {
//     console.log("Javascript is BORING");
// }

// let firstName = "Alex";

// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);

// console.log(firstName);

//math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSara = now - 2018
// console.log(ageJonas, ageSara);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// //2 ** 3 means 2 to the power of 3

// const firstName = 'Jonas';
// const lastName = 'Longgown';

// console.log(firstName + ' ' +  lastName);

//assignment operators
// let x = 10 + 5;

// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

//comparison operators
// const ageJonas = 50;
// const ageSarah = 30;
// console.log(ageJonas > ageSarah); // 

// const averageAge = (ageJonas + ageSarah) / 2;

// console.log(ageJonas, ageSarah, averageAge);

//challenge 

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);

// if (markHigherBMI === true){
//     console.log('Mark BMI is higher than John');
// } else {
//     console.log('John BMI is higher than Mark');
// }

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ' a ' + (year - birthYear)+ ' years old' + ' teacher';

// console.log(jonas);

// const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`; //template literals
// console.log(jonasNew);

// console.log(`String
// multiple
// lines`);

const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`You are old enough to get a driver's license.`)
}
else {
    console.log(`You are NOT old enough! Take some sleep!`)
}

const birthYear = 1991;
let cent;
if (birthYear <= 2000) {
    cent = 20;
}
else {
    cent = 21;
}

console.log(cent);