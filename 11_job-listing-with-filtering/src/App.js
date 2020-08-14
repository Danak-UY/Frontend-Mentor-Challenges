import React from "react";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import JobComponentList from "./components/JobComponentList";

function App() {
  return (
    <div className="App">
      <Header />
      <FilterBar />
      <JobComponentList />
    </div>
  );
}

export default App;
