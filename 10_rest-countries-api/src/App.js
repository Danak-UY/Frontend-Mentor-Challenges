import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";

import reducer from "./connections/Reducer";

import CountryList from "./components/CountryList";
import ActionList from "./components/ActionList";

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  coutryFilteredList: [],
  filterByRegion: "",
  filterByName: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ActionList />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
