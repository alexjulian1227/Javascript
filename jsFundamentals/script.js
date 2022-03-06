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

// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`You are old enough to get a driver's license.`)
// }
// else {
//     console.log(`You are NOT old enough! Take some sleep!`)
// }

// const birthYear = 1991;
// let cent;
// if (birthYear <= 2000) {
//     cent = 20;
// }
// else {
//     cent = 21;
// }

// console.log(cent);

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);

// if (markHigherBMI === true){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }

//type conversion and coersion

// const inputYear = '1991';
// console.log(Number(inputYear))
// console.log(Number(inputYear) + 18);

// console.log(String(23) + ' years old');

// //type coersion
// console.log('I am ' + 23 + ' years old.')
// //converts the data type automatically for the output

//truthsy and faltsy
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const age = 18;
// // === strict comparison
// if (age === 18) console.log('You are now on legal age');

// const ageNew = '18';

// if (ageNew == 18) console.log('Loose comparison that can use type coersion');

// const favNum = Number(prompt("What's your favorite number ?"));

// console.log(favNum);

// if (favNum == 7) {
//     console.log('Cool');
// }
// else {
//     console.log('Loose comparison')
// }

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense); 

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('You can drive now!');
// } else {
//     console.log('No!')
// }

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas  = (109 + 95 + 106) / 3;

// if (averageDolphins && averageKoalas < 100) {
//     console.log(`No one wins the round! Scores below 100 
//     Dolphins: ${averageDolphins}
//     Koalas: ${averageKoalas}`);
// }

// else if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log(`Dolphins win this round! 
//     Dolphins: ${averageDolphins}
//     Koalas: ${averageKoalas}`);
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log(`Koalas win this round! 
//     Dolphins: ${averageDolphins}
//     Koalas: ${averageKoalas}`);
// } else {
//     console.log(`Draw! 
//     Dolphins: ${averageDolphins}
//     Koalas: ${averageKoalas}`);
// }
//switch statement
const day = 'saturday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy weekend');
        break;
    default:
        console.log('Not a valid day!')
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}
else if (day === 'tuesday') console.log('Prepare theory videos');
else if (day === 'wednesday' || day === 'thursday') console.log('Write code examples');
else if (day === 'friday') console.log('Record videos');
else if (day === 'saturday' || day === 'sunday') console.log('Enjoy weekend');
else console.log('Not a valid day!');