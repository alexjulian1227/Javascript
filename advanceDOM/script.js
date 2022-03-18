"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

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

//SMOOTH SCROLLING TO ID SECTION
btnScrollTo.addEventListener("click", function (e) {
  const sec1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({ behavior: "smooth" });
});

// //PAGE NAVIGATION
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(`link`);
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//EVENT DELEGATION

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//TYPE OF EVENTS AND EVENT HANDLERS
// const h1 = document.querySelector("h1");

// const alertH1 = function (e) {
//   alert("addEventListener: Great! You are reading the heading :D");

//h1.removeEventListener("mouseenter", alertH1); //listen to the event once and you can also settimeout for a specific time to get the event to be remove
// };
// h1.addEventListener("mouseenter", alertH1); //you can use multiple by changing function
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great! You are reading the heading onmouseenter:D");
// };

//EVENT PROPAGATION:BUBBLING AND CAPTURING
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`link`, e.target, e.currentTarget);

//   //stop propagation bubbling and capturing to prevent the parent elements to get the same el
//   // e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`container`, e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`nav`, e.target, e.currentTarget);
// });

// //SMOOTH SCROLLING TO ID SECTION
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function (e) {
//   const sec1coords = section1.getBoundingClientRect();
//   // console.log(sec1coords);
//   // console.log(e.target.getBoundingClientRect());

//   // console.log("Current scrol (X/Y)", window.pageXOffset, pageYOffset);

//   // console.log(
//   //   "height/width of viewport",
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   //scrolling
//   // window.scrollTo(
//   //   sec1coords.left + window.pageXOffset,
//   //   sec1coords.top + window.pageYOffset
//   // );
//   //scrolling with animation by adding it as object compared to the 1st code
//   // window.scrollTo({
//   //   left: sec1coords.left + window.pageXOffset,
//   //   top: sec1coords.top + window.pageYOffset,
//   //   behavior: "smooth",
//   // });

//   //modern way modern browser and must use
//   section1.scrollIntoView({ behavior: "smooth" });
// });
///////
// console.log(document.documentElement); //get the whole html element
// console.log(document.head); //just the head
// console.log(document.body); //just the body
// const header = document.querySelector("header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allBtns = document.getElementsByTagName("button"); //will return HTML collection that updates automatically
// console.log(allBtns);

// console.log(document.getElementsByClassName("btn"));

// //creating and inserting elements
// // .insertAdjacentHTML

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent =
// //   "We used cookied for improved functionality and analytics.";

// message.innerHTML = `We used cookied for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;

// header.prepend(message); //will add the content b4 the first element/ first child
// // header.append(message); //will add the content as the last child
// // header.append(message.cloneNode(true)); //allowing to copy the header since DOM is unique
// // header.before(message) //before the header
// // header.after(message)

// //delete elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

// //STYLES

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// //managing the custom property or variables in CSS file
// document.documentElement.style.setProperty("--color-primary", "orangered");

// //managing attributes
// const logo = document.querySelector(".nav__logo");
// const link = document.querySelector(".twitter-link");
// const link2 = document.querySelector(".nav__link--btn");

// console.log(logo.alt);
// logo.alt = "Beautiful minimalist logo";
// console.log(logo.src); //absolute url different to relative in html file
// console.log(logo.getAttribute("src")); //same src in HTML file
// console.log(logo.className);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Bankist");

// console.log(link.href);
// console.log(link.getAttribute("href"));

// console.log(link2.href);
// console.log(link2.getAttribute("href"));

// //Data Attributes
// console.log(logo.dataset.versionNumber); //will be useful

// //Classes

// logo.classList.add("c", 'd', 'e'); //you can add multiple classes in one go
// logo.classList.remove("c", 'j');
// logo.classList.toggle("c");
// logo.classList.contains("c");

// logo.className = 'jonas'
