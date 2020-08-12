import React from "react";
import "./App.css";

import Country from "./components/Country";

function App() {
  return (
    <div className="App">
      <Country
        flag="https://restcountries.eu/data/gbr.svg"
        name="United Kingdom"
        population={65110000}
        region="Europe"
        capital="London"
      />
    </div>
  );
}

export default App;
