"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const closeBox = function () {
  modal.classList.add("hidden");
  overlay.classList.toggle("hidden");
};

btnCloseModal.addEventListener("click", function () {
  closeBox();
});

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.toggle("hidden");
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeBox();
  }
});
