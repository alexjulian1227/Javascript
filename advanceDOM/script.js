"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////
console.log(document.documentElement); //get the whole html element
console.log(document.head); //just the head
console.log(document.body); //just the body
const header = document.querySelector("header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allBtns = document.getElementsByTagName("button"); //will return HTML collection that updates automatically
console.log(allBtns);

console.log(document.getElementsByClassName("btn"));

//creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent =
//   "We used cookied for improved functionality and analytics.";

message.innerHTML = `We used cookied for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;

// header.prepend(message); //will add the content b4 the first element/ first child
header.append(message); //will add the content as the last child
// header.append(message.cloneNode(true)); //will add the content to the first and last at the same time
