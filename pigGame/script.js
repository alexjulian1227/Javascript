"use strict";
//element declaration
const dice = document.querySelector(".dice");
const player1Total = document.getElementById("score--0");
const player2Total = document.getElementById("score--1");
const player1Current = document.getElementById("current--0");
const player2Current = document.getElementById("current--1");

const btnRoll = document.querySelector(".btn--roll");

let player1TotalScore,
  player2TotalScore,
  player1CurrentScore,
  player2CurrentScore;

//game start
const gameStart = function () {
  dice.classList.add("hidden");

  player1Total.textContent = 0;
  player2Total.textContent = 0;

  player1Current.textContent = 0;
  player2Current.textContent = 0;

  player1TotalScore = 0;
  player2TotalScore = 0;
  player1CurrentScore = 0;
  player2CurrentScore = 0;
};

//main
gameStart();

btnRoll.addEventListener("click", function () {
  dice.classList.remove("hidden");
  const rand = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${rand}.png`;
});
