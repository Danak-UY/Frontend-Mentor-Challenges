import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import reducer from "./connections/Reducer";

import Header from "./components/Header";
import CountryList from "./components/CountryList";
import ActionList from "./components/ActionList";
import CountryPage from "./components/CountryPage";

const initialState = {
  countryList: [],
  coutryFilteredList: [],
  filterByRegion: "",
  filterByName: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <ActionList />
              <CountryList />
            </Route>
            <Route path="/country/:slug/:id" component={CountryPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
