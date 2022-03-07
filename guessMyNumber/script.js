"use strict";

let message = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");

let generateNumber = Math.trunc(Math.random() * 20 + 1);
let baseScore = 20;

number.textContent = generateNumber;

if (guess.value > generateNumber) {
  message.textContent("Too high");
} else {
  message.textContent("Too low");
}
