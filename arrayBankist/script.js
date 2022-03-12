"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = ""; //clearing the old container to prepare the entries
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "widthdrawl";

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
      </div>
  `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `$${balance} EUR`;
};

const createUsernames = function (accs) {
  //create username key/value in accounts obj
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((str) => str[0])
      .join("");
  });
};
const login = function () {
  const loginEntered = inputLoginUsername.textContent;
  console.log(loginEntered);
};
btnLogin.addEventListener("click", login);

//global
// displayMovements(account1.movements);
// calcDisplayBalance(account1.movements);
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

//SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //creating shallow copy of the array

// //SPLICE *mutates/change the original array
// //console.log(arr.splice(2)); //cut the selected arrays
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

//REVERSE *mutates the original array
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// //JOIN
// console.log(letters.join("-"));

//forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const search = movements.find((mov) => mov < 0);
// console.log(search);
// console.log(accounts);
// const typeUsername = prompt("Enter your username");
// const getUsername = accounts.find((acc) => acc.username === typeUsername);

// console.log(getUsername);
// // for (const move of movements) {
// //   if (move > 0) {
// //     console.log(`You deposited $${move}`);
// //   } else {
// //     console.log(`You withdrew -$${Math.abs(move)}`);
// //   }
// // }

// movements.forEach(function (move, index, array) {
//   //parameters should be in order
//   if (move > 0) {
//     console.log(`Movement ${index + 1}: You deposited $${move}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew -$${Math.abs(move)}`);
//   }
// });

//MAP
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// // log to the console whether it's an adult ("Dog number 1
// // is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy

// const checkDogs = function (dogsJ, dogsK) {
//   const dogsJFinal = dogsJ.slice(1, -2);
//   const allDogs = dogsJFinal.concat(dogsK);

//   allDogs.forEach(function (dog, i) {
//     const dogAge = dog >= 3 ? "an adult" : "still a puppy";
//     console.log(`Dog number ${i + 1} is ${dogAge}, and is ${dog} years old.`);
//   });
// };

// checkDogs(dogsJulia, dogsKate);
// const dogAges = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = dogAges
//   .map((ages) => {
//     if (ages <= 2) return 2 * ages;
//     else return 16 + ages * 4;
//   })
//   .filter((ages) => ages > 18)
//   .reduce((acc, cur, arr) => acc + cur, 0);
// console.log(calcAverageHumanAge);
// const getAverage =
//   calcAverageHumanAge.reduce((acc, cur) => acc + cur) /
//   calcAverageHumanAge.length;

// console.log(`Normal age of adult dogs ${getAverage}`);

// const underAge = calcAverageHumanAge.filter((ages) => ages > 18);
// console.log(underAge);
// const averageAge =
//   underAge.reduce((acc, age) => acc + age, 0) / underAge.length;

// console.log(averageAge);
//44
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const balanceConvertUSD = movements
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(`$${String(balanceConvertUSD).split(".")[0]}`);

// const maxValue = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(maxValue);
// 5020;
// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log(balance);
// const deposit = movements.filter((mov) => mov > 0);
// console.log(deposit.join("\n"));
// const eurToUsd = 1.1;

// // const movementsUsd = movements.map(function (val) {
// //   return val * eurToUsd;
// // });

// const movementsUsd = movements.map((val) => val * eurToUsd);

// console.log(movementsUsd);

// const showMovements = movements.map((mov, i) => {
//   const type = mov > 0 ? "deposited $" : "withdrew -$";
//   return `Movement ${i + 1}: You ${type}${Math.abs(mov)}`;
// });

// console.log(showMovements);
