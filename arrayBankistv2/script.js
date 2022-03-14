"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2022-02-09T21:31:17.178Z",
    "2022-02-10T07:42:02.383Z",
    "2022-03-03T09:15:04.904Z",
    "2022-03-04T10:17:24.185Z",
    "2022-03-05T14:11:59.604Z",
    "2022-03-10T17:01:17.194Z",
    "2022-03-11T23:36:17.929Z",
    "2022-03-13T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2022-03-01T13:15:33.035Z",
    "2022-03-05T09:48:16.867Z",
    "2022-03-06T06:04:23.907Z",
    "2022-03-07T14:18:46.235Z",
    "2022-03-10T16:33:06.386Z",
    "2022-03-11T14:43:26.374Z",
    "2022-03-11T18:49:59.371Z",
    "2022-03-13T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPast = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPast = calcDaysPast(new Date(), date);

  if (daysPast === 0) return "Today";
  if (daysPast === 1) return "Yesterday";
  if (daysPast <= 7) return `${daysPast} days ago`;
  // if (daysPast > 31 && daysPast < 40) return `a month ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (acc, amount) {
  const formattedMovement = new Intl.NumberFormat(acc.locale, {
    style: "currency",
    currency: acc.currency,
  }).format(amount);
  return formattedMovement;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovement = new Intl.NumberFormat(acc.locale, {
      style: "currency",
      currency: acc.currency,
    }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // const formattedMovement = new Intl.NumberFormat(acc.locale, {
  //   style: "currency",
  //   currency: acc.currency,
  // }).format(acc.balance);
  // labelBalance.textContent = formattedMovement;
  labelBalance.textContent = formatCurrency(acc, acc.balance);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(acc, incomes);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(acc, Math.abs(out));

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(acc, interest);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  //setting the time to 5mins
  let time = 300; //by seconds
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //in each call, print the remaining time to the user interface
    labelTimer.textContent = `${min}:${sec}`;

    //when the time hits 0 or expires stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
    //decrease 1 second
    time--;
  };
  //call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//FAKE LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// const date = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth()}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);

// labelDate.textContent = `${date}/${month}/${year}, ${hour}:${min}`;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time
    //internationalizing ISO Language Code Table
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    };

    const defaultLocale = navigator.language; //the iso code will be from the user browser 'en-US'
    const locale = currentAccount.locale;
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    ); //internationalizing ISO Language Code Table
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    //starting timer
    if (timer) clearInterval(timer); //check if there are other timer
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset timer //every time there's activity the timer will be reset
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//Dates and Times

//operations with date
//create a date 4ways
// const now = new Date();
// console.log(now);

// console.log(new Date("Mar 14 2022 10:35:35"));
// console.log(new Date("December 24, 2021"));
// console.log(account1);
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //milliseconds to days

//working with dates
// const future = new Date(2037, 10, 19, 15, 23, 5);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.toDateString());
// console.log(future.getTime());
// console.log(new Date(2142228185000)); //timestamp
// console.log(Date.now()); //get the timestamp right now

// future.setFullYear(2040); //modify the date and will auto calculate the rest
// console.log(future);
//remainder
//BIG INT
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(BigInt(4938490234));
// console.log(234234234234234234n);
// console.log(5 % 2);
// console.log(8 % 3);

// console.log(6 % 2);
// console.log(7 % 2);

// const isEven = (num) => num % 2 === 0; //checks if num is even
// console.log(isEven(7));

// labelBalance.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = "orangered";
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = "blue";
//     }
//   });
// });
// console.log(23 === 23.0);
// //parsing
// console.log(Number.parseInt("30px", 10)); //base 10 //base 2 binary
// console.log(Number.parseInt("2.5rem  ", 10));
// console.log(Number.parseFloat("2.5rem  ", 10));

// console.log(Number.isNaN(20));
// console.log(Number.isNaN("20"));
// console.log(Number.isNaN(+"20px"));

// //checking if value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(Number.parseInt("20px", 10)));
// console.log(Number.isFinite("20"));

// const arr = [5, 18, 23, 11, 2];

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// console.log(Math.PI * Number.parseFloat("10px") ** 2); //radius of a circle
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// //rounding integers
// console.log(Math.trunc(3.5));

// console.log(Math.round(23.9)); //round depends on decimal
// console.log(Math.round(23.4));
// console.log(Math.round(23.5));

// console.log(Math.ceil(23.9)); //roundup to the next number
// console.log(Math.ceil(23.4));
// console.log(Math.ceil(23.5));

// console.log(Math.floor(23.9)); //rounded down to the original number
// console.log(Math.floor(23.4));
// console.log(Math.floor(23.5));

// console.log(Math.floor(-23.9));
// console.log(Math.trunc(-23.9));

//rounding decimals
// console.log((2.7).toFixed(0)); //returns a string
// console.log((2.7).toFixed(3));
// console.log(+(2.345).toFixed(2)); //convert to number by adding '+'

//operations with dates

// const future = new Date(2037, 10, 19, 15, 23, 5);

// console.log(+future);

// const calcDaysPast = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// console.log(calcDaysPast(new Date(2037, 3, 14), new Date(2037, 3, 4)));

//format numbers
// const num = 23423488.332;
// const options = {
//   style: "currency", //unit, percent, currency
//   unit: "celsius",
//   currency: "USD",
//   // userGrouping: false,
// };

// console.log("US: ", new Intl.NumberFormat("en-US", options).format(num)); //formatting currency
// console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
// console.log("Syria: ", new Intl.NumberFormat("ar-SY", options).format(num));
// console.log(
//   "Navigator Language: ",
//   new Intl.NumberFormat(navigator.locale, options).format(num)
// );

//TIMERS
//setTimeout(function, milliseconds, arguments)
// const arr = ["olives", "spinachs"];
// const orderPizza = setTimeout(
//   (ing1, ing2) => console.log(`Here's your pizza with ${ing1} and ${ing2}`),
//   5000,
//   ...arr
// );
// console.log("waiting......");
// if (arr.includes("spinach")) clearTimeout(orderPizza); //cancel the setTimeout before it start/activate

//setTimeinterval //looping time
// setInterval(function () {
//   const now = new Date();
//   const hour = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   // console.log(`${hour}:${minutes}:${seconds}`);
//   const options = {
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   };
//   const intNow = new Intl.DateTimeFormat("en-US", options).format(now);
//   console.log(intNow);
// }, 2000);
