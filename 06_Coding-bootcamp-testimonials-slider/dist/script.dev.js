"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(selector) {
    var _this = this;

    var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var movement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;

    _classCallCheck(this, Slider);

    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll(".slide");
    this.itemsCount = this.slides.length;
    this.slider.querySelector(".slider__buttons").childNodes.forEach(function (element) {
      element.addEventListener("click", function (ev) {
        return _this.evaluateMove(ev);
      });
    });
    this.counter = 0;
    this.animation = animation;
    this.movement = movement;
    this.interval = null;
    this.delay = delay;
    this.move = this.move.bind(this);
    this.evaluateMove = this.evaluateMove.bind(this);
    this.start();
    this.showSlilde(this.slider.querySelectorAll(".slide")[this.counter]);
  }

  _createClass(Slider, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.movement) return null;
      this.interval = window.setInterval(function () {
        return _this2.move("next");
      }, this.delay);
    }
  }, {
    key: "restart",
    value: function restart() {
      if (this.interval) window.clearInterval(this.interval);
      this.start();
    }
  }, {
    key: "evaluateMove",
    value: function evaluateMove(ev) {
      if (ev.target.classList.contains("next")) this.move("next");else this.move("prev");
    }
  }, {
    key: "move",
    value: function move(direction) {
      var currentSlide = this.counter;

      if (direction === "next") {
        this.counter++;
        if (this.counter > this.itemsCount - 1) this.counter = 0;
      } else {
        this.counter--;
        if (this.counter < 0) this.counter = this.itemsCount - 1;
      }

      this.moveTo(currentSlide, this.counter);
    }
  }, {
    key: "moveTo",
    value: function moveTo(currentSlide, nextSlide) {
      var _this3 = this;

      this.hideSlide(this.slides[currentSlide]);
      setTimeout(function () {
        return _this3.showSlilde(_this3.slides[nextSlide]);
      }, 1301);
    }
  }, {
    key: "showSlilde",
    value: function showSlilde(slide) {
      slide.classList.add("vissible");
      setTimeout(function () {
        return slide.classList.add("enter");
      }, 50);
      setTimeout(function () {
        return slide.classList.add("active");
      }, 100);
    }
  }, {
    key: "hideSlide",
    value: function hideSlide(slide) {
      slide.classList.remove("enter");
      setTimeout(function () {
        return slide.classList.remove("active");
      }, 50);
      setTimeout(function () {
        return slide.classList.remove("vissible");
      }, 1300);
    }
  }]);

  return Slider;
}();

(function () {
  new Slider(".slider", true, false, 8000);
})();