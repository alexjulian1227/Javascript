"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

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

//TABBED COMPONENT

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  if (!clicked) return; //guard clause
  //active tab
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  //active content
  tabsContent.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//menu fade animation
const menuFade = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", menuFade.bind(0.5));

nav.addEventListener("mouseout", menuFade.bind(1));

//sticky navigation
//bad performance using scroll event
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else {
//     nav.classList.remove("sticky");
//   }
// });

//intersection api
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// const observerOptions = {
//   root: null, //viewport
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, observerOptions);

// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal sections
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

//lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

//SLIDER like carousel
const slideFunction = function () {
  //creating it within a function to avoid polluting the web
  const dotContainer = document.querySelector(".dots");
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");

  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  // slider.style.transform = "scale(.4) translateX(-800px)";
  // slider.style.overflow = "visible";

  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, index) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class='dots__dot' data-slide=${index}></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  const gotoSlide = function (slide) {
    slides.forEach(
      (s, index) =>
        (s.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    gotoSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    gotoSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    createDots();
    gotoSlide(0);
  };

  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      console.log(slide);
      gotoSlide(slide);
      activateDot(slide);
    }
  });
};
slideFunction();

document.addEventListener("DOMContentLoaded", function (e) {
  console.log(`HTML parsed and DOM tree built!`);
});

window.addEventListener("load", function (e) {
  console.log("Page fully loaded", e);
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
