class Slider {
  constructor(selector, movement = true, delay = 5000) {
    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll(".slide");
    this.itemsCount = this.slides.length;
    this.slider
      .querySelector(".slider__buttons")
      .childNodes.forEach((element) => {
        element.addEventListener("click", (ev) => this.evaluateMove(ev));
      });

    this.counter = 0;
    this.movement = movement;
    this.interval = null;
    this.delay = delay;

    this.move = this.move.bind(this);
    this.evaluateMove = this.evaluateMove.bind(this);

    this.start();
    this.showSlilde(this.slider.querySelectorAll(".slide")[this.counter]);
  }

  start() {
    if (!this.movement) return null;
    this.interval = window.setInterval(() => this.move("next"), this.delay);
  }

  restart() {
    if (this.interval) window.clearInterval(this.interval);
    this.start();
  }

  evaluateMove(ev) {
    if (ev.target.classList.contains("next")) this.move("next");
    else this.move("prev");
  }

  move(direction) {
    const currentSlide = this.counter;
    if (direction === "next") {
      this.counter++;
      if (this.counter > this.itemsCount - 1) this.counter = 0;
    } else {
      this.counter--;
      if (this.counter < 0) this.counter = this.itemsCount - 1;
    }
    this.moveTo(currentSlide, this.counter);
  }

  moveTo(currentSlide, nextSlide) {
    this.restart();
    this.hideSlide(this.slides[currentSlide]);
    setTimeout(() => this.showSlilde(this.slides[nextSlide]), 1301);
  }

  showSlilde(slide) {
    slide.classList.add("vissible");
    setTimeout(() => slide.classList.add("enter"), 50);
    setTimeout(() => slide.classList.add("active"), 100);
  }

  hideSlide(slide) {
    slide.classList.remove("enter");
    setTimeout(() => slide.classList.remove("active"), 50);
    setTimeout(() => slide.classList.remove("vissible"), 1300);
  }
}

(function () {
  new Slider(".slider", true, 8000);
})();
