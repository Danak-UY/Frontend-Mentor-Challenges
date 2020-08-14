import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./connections/reducer";

import App from "./App";

const initialState = {
  jobsList: [],
  jobsFilteredList: [],
  filterTags: [],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
