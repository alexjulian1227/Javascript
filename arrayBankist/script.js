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

const updateUI = function () {
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

const clearInputs = function () {
  inputLoginUsername.value = inputLoginPin.value = "";
  inputTransferTo.value = inputTransferAmount.value = "";
  inputCloseUsername.value = inputClosePin.value = "";
  inputLoanAmount.value = "";
};

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ""; //clearing the old container to prepare the entries
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__date">3 days ago</div>
            
            <div class="movements__value">$${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `$${acc.balance}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `$${incomes}`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `$${Math.abs(outcomes)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `$${interest}`;
};
//Global
createUsernames(accounts);
let globalBalance;
let sortStatus = false;
/////EVENT LISTENERS
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); //prevent form from submitting

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    //display ui and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    updateUI();
    clearInputs();
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const findAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (findAccount && currentAccount.username !== findAccount.username) {
    if (amount > 0 && currentAccount.balance > amount) {
      findAccount.movements.push(amount);
      currentAccount.movements.push(-amount);
      updateUI();
      clearInputs();
    } else if (currentAccount.balance === amount) {
      alert("Attention: This action will empty your balance. Please consider");
      inputTransferAmount.value = "";
    } else {
      alert("Check balance");
      inputTransferAmount.value = "";
    }
  } else {
    alert("Invalid user");
    inputTransferTo.value = "";
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const deleteAccount = accounts.findIndex(
      (acc) => acc.username === inputCloseUsername.value
    );
    accounts.splice(deleteAccount, 1);
    const confirm = prompt(
      "Are you sure you want to close your account? Type 'yes' to confirm."
    ).toLowerCase();
    if (confirm === "yes") {
      alert(`Your account was now closed!`);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
      updateUI();
      clearInputs();
    }
  } else {
    alert("Please check your credentials carefully to close your account.");
    clearInputs();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI();
    clearInputs();
  }
});

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortStatus);
  sortStatus = !sortStatus;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1
dogs.forEach(function (arr) {
  const food = Math.trunc(arr.weight ** 0.75 * 28);
  return (arr.recommendFood = food);
});

const dogSara =
  dogs[
    dogs
      .map((str) => str.owners)
      .map((str) => str.includes("Sarah"))
      .findIndex((str) => str === true)
  ];

// console.log(dogs[dogSara]);
const dogEat = dogSara.weight;

console.log(dogSara);
console.log(dogEat);

// const convertTitleCase = function (str) {
//   const exceptions = ["a", "an", "on", "in", "with"];
//   const str1 = str
//     .toLowerCase()
//     .split(" ")
//     .map((word) =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(" ");

// const str1 = str
// .split(" ")
//   .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase());

//   console.log(str1);
// };
// convertTitleCase("this is a nice title on this with many options");
// convertTitleCase("alEX jULian");
// convertTitleCase("alex");

//sum of dep sum of withdrawals
// const { deposit, withdrawal } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposit += cur) : (sums.withdrawal += cur);
//       return sums;
//     },
//     { deposit: 0, withdrawal: 0 }
//   );

// console.log(deposit, withdrawal);
// const bankDeposit = accounts
//   .map((mov) => mov.movements)
//   .flat()
//   .filter((mov) => mov >= 1000);
// // console.log(`Total deposit for the bank: $${bankDeposit}`);
// console.log(bankDeposit.length);
//creating new array
// const arr = [1, 2, 3, 4, 5, 6, 7];
// //empty arrays + fill
// const x = new Array(7);
// console.log(x);
// x.fill(7, 2, 4);
// console.log(x);
// //array from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 100 }, (cur, i) =>
//   Math.trunc(Math.random() * 6 + 1)
// );
// console.log(z);

// labelBalance.addEventListener("click", function () {
//   const movementsUi = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("$", ""))
//   );
//   console.log(movementsUi);
// });
//sort
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // console.log(movements);
// // movements.sort((a, b) => {
// //   //ascending order lowest to highest
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => a - b); //best code for ascending
// console.log(movements);

// movements.sort((a, b) => b - a); //best code for descending
// console.log(movements);
//flat
// const bankTotalBalance = accounts
//   .map((acc) => acc.movements)
//   .flat(1)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(bankTotalBalance);
// //flatmap
// const bankTotalBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(bankTotalBalance2);

//get the highest balance account holder
// const listAccountHolder = accounts.map((acc) => acc.movements);
// const listAccountOwners = accounts.map((acc) => acc.owner);

// console.log(listAccountOwners, listAccountMovements);
// const total = listAccountHolder.map((mov, i) =>
//   mov.reduce((acc, cur) => acc + cur, 0)
// );
// const max = total.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// });
// console.log(listAccountHolder);
// console.log(total);
// console.log(max);
// console.log(
//   `Top Investor: ${accounts[total.findIndex((val) => val === max)].owner}`
// );

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// //flat method
// console.log(arr.flat()); //combines and removed nested arrays into one single array
// const arr = ["a", "b", "c", "d"];
// const arr2 = ["e", "f", "g", "h"];
// const arr3 = ["i", "j", "k", "l"];
// const mainArr = [arr, arr2, arr3];

// const delArr = mainArr.findIndex((arr) => arr[1] === "j");
// console.log(delArr);

// mainArr.splice(delArr, 1);
// console.log(mainArr);
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

//
// const movements2 = [200, 450, 400, 3000, 650, 130, 70, 1300];
// //some method check the array if it meet the condition set

// // const anyDeposit = movements.some((mov) => mov > 0);
// // console.log(anyDeposit);
// // const anyWithdrawal = movements2.some((mov) => mov < 0);
// // console.log(anyWithdrawal);

// if (movements.some((mov) => mov > 5000)) {
//   console.log(`There's a large deposit found!`);
// } else {
//   console.log(`No large deposit found.`);
// }
//EVERY will only return true if all the elements pass the condition
// console.log(account4.movements.every((mov) => mov > 0));
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
