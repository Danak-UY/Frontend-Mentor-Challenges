"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function filterByRegion(list, region) {
  return list.filter(function (country) {
    return country.region === region || region === "";
  });
}

function filterByName(list, name) {
  return list.filter(function (country) {
    return country.name.toLowerCase().includes(name.toLowerCase());
  });
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST":
      {
        var _filterByRegion = "";
        var _filterByName = "";
        return _objectSpread({}, state, {
          countryList: action.payload,
          filterByRegion: _filterByRegion,
          filterByName: _filterByName
        });
      }

    case "SET_COUNTRY_BY_NAME":
      {
        var list = state.countryList;
        var filterText = action.payload.toLowerCase();

        if (filterText === "" && state.filterByRegion === "") {
          return _objectSpread({}, state, {
            countryFilteredList: [],
            filterByName: ""
          });
        }

        if (state.filterByRegion !== "") {
          list = filterByRegion(list, state.filterByRegion);
        }

        var coutryFilteredList = filterByName(list, filterText);
        return _objectSpread({}, state, {
          coutryFilteredList: coutryFilteredList,
          filterByName: filterText
        });
      }

    case "FILTER_BY_REGION":
      {
        var regionSelected = action.payload;

        if (regionSelected === "") {
          return _objectSpread({}, state, {
            coutryFilteredList: [],
            filterByRegion: ""
          });
        }

        var _coutryFilteredList = filterByRegion(state.countryList, regionSelected);

        if (state.filterByName !== "") {
          _coutryFilteredList = filterByName(_coutryFilteredList, state.filterByName);
        }

        return _objectSpread({}, state, {
          coutryFilteredList: _coutryFilteredList,
          filterByRegion: regionSelected
        });
      }

    default:
      {
        return state;
      }
  }
}