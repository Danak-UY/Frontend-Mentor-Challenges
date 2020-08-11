"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = evaluateGame;

function evaluateGame(userPicked, housePicked) {
  console.log(userPicked);
  console.log(housePicked);
  if (userPicked === "" || !housePicked === "") return;
  if (userPicked === housePicked) return "It's a draw!";
}