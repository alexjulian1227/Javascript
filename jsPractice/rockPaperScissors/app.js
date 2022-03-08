"use strict";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const computer = document.getElementById("computer-choice");
const user = document.getElementById("user-choice");
const result = document.getElementById("result");

function randomChoice() {
  let rand = Math.trunc(Math.random() * 3 + 1);
  if (rand === 1) {
    return "Rock";
  } else if (rand === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

let userChoice, computerChoice;

//events
rock.addEventListener("click", function () {
  user.textContent = "Rock";
  computer.textContent = randomChoice();

  userChoice = "Rock";
  computerChoice = computer.textContent;

  if (userChoice === "Rock" && computerChoice === "Scissor")
    result.textContent = "You win!";
  else if (userChoice === "Rock" && computerChoice === "Paper")
    result.textContent = "You lose!";
  else result.textContent = "Draw";
});

paper.addEventListener("click", function () {
  user.textContent = "Paper";
});

scissor.addEventListener("click", function () {
  user.textContent = "Scissor";
});
