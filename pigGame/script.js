"use strict";
let scores = [0, 0];

let player1TotalScore,
  player2TotalScore,
  player1CurrentScore,
  player2CurrentScore,
  activePlayer,
  currentScore;

activePlayer = 0;
//element declaration
const dice = document.querySelector(".dice");
const player1Total = document.getElementById("score--0");
const player2Total = document.getElementById("score--1");
const player1Current = document.getElementById("current--0");
const player2Current = document.getElementById("current--1");
const currentEl = document.getElementById(`current--${activePlayer}`);

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

//game start
const gameStart = function () {
  dice.classList.add("hidden");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  player1Total.textContent = 0;
  player2Total.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  activePlayer = 0;
  currentScore = 0;

  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");

  scores = [0, 0];
};

const clearCurrentScore = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};

const gameWinner = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--winner");
  dice.classList.add("hidden");
  btnRoll.classList.add("hidden");
  btnHold.classList.add("hidden");
};

//main
gameStart();

btnRoll.addEventListener("click", function () {
  dice.classList.remove("hidden");
  const rand = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${rand}.png`;

  if (scores[activePlayer] < 100) {
    if (rand != 1) {
      currentScore += rand;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      clearCurrentScore();
    }
  } else {
    gameWinner();
  }
});

btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  scores[activePlayer] < 100 ? clearCurrentScore() : gameWinner();
});

btnNew.addEventListener("click", function () {
  gameStart();
});
