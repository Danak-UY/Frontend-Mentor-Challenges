"use strict";

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var slides = document.querySelectorAll(".slide");
var index = 0;
slides[index].classList.add("active");
slides[index].classList.add("vissible");

function nextSlide() {
  index++;

  if (index > slides.length - 1) {
    index = 0;
  }

  slides.forEach(function (slide) {
    slide.classList.remove("active");
    setTimeout(function () {
      return slide.classList.remove("vissible");
    }, 800);
  });
  setTimeout(function () {
    return slides[index].classList.add("vissible");
  }, 800);
  setTimeout(function () {
    return slides[index].classList.add("enter");
  }, 805);
  setTimeout(function () {
    return slides[index].classList.add("active");
  }, 810);
}

function prevSlide() {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.classList.remove("vissible");
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
  slides[index].classList.add("vissible");
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);