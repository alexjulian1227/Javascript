"use strict";
//query declarations
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");

//generate random number
// let generateNumber = Math.trunc(Math.random() * 20 + 1);
let baseScore = 20;
let highscore = 0;

//dont repeat yourself creating reusable functions
let generateRandomNumber = () => Number(Math.trunc(Math.random() * 20 + 1));
let generateNumber = generateRandomNumber();

let deductScore = function () {
  if (baseScore > 1) {
    baseScore -= 1;
    score.textContent = baseScore;
  } else {
    message.textContent = "GAME OVER!";
    score.textContent = 0;
  }
};

//event listeners
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(guess.value);

  if (!guessNumber) {
    message.textContent = "Please enter a number!";
    deductScore();
  } else if (guessNumber > generateNumber) {
    message.textContent = "Too high!";
    deductScore();
  } else if (guessNumber < generateNumber) {
    message.textContent = "Too low!";
    deductScore();
  } else {
    message.textContent = "You got it!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    number.textContent = generateNumber;
    if (baseScore > highscore) {
      highscore = baseScore;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  baseScore = 20;
  generateNumber = generateRandomNumber();
  number.textContent = "?"; //test
  score.textContent = baseScore;
  document.querySelector("body").style.backgroundColor = "#222";
  guess.value = "";
});

//for testing only
// number.textContent = generateNumber;

//main
