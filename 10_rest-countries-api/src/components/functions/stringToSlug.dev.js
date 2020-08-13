"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = convertToSlug;

function convertToSlug(Text) {
  return Text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}