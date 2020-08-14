"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function filterJobsByTags(list, tags) {
  tags.forEach(function (tag) {
    list = list.filter(function (job) {
      var techs = [job.role, job.level].concat(_toConsumableArray(job.languages || []), _toConsumableArray(job.tools || []));
      return techs.includes(tag);
    });
  });
  return list;
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_JOBS_LIST":
      {
        console.log(action.payload);
        return _objectSpread({}, state, {
          jobsList: action.payload
        });
      }

    case "FILTER_BY_TAGS":
      {
        var tagSelected = action.payload;
        var filterTags = state.filterTags;
        if (filterTags.includes(tagSelected)) return _objectSpread({}, state);
        filterTags.push(tagSelected);
        var jobsFilteredList = filterJobsByTags(state.jobsList, filterTags);
        return _objectSpread({}, state, {
          filterTags: filterTags,
          jobsFilteredList: jobsFilteredList
        });
      }

    case "REMOVE_FILTER_TAG":
      {
        if (state.filterTags.length === 0) return _objectSpread({}, state);

        var _filterTags = state.filterTags.filter(function (tag) {
          return tag !== action.payload;
        });

        var _jobsFilteredList = filterJobsByTags(state.jobsList, _filterTags);

        return _objectSpread({}, state, {
          filterTags: _filterTags,
          jobsFilteredList: _jobsFilteredList
        });
      }

    case "CLEAR_FILTER":
      {
        var _filterTags2 = [];
        var _jobsFilteredList2 = [];
        return _objectSpread({}, state, {
          filterTags: _filterTags2,
          jobsFilteredList: _jobsFilteredList2
        });
      }

    default:
      return _objectSpread({}, state);
  }
}