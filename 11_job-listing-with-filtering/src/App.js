import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import JobComponentList from "./components/JobComponentList";

function App() {
  const filterTags = useSelector((state) => state.filterTags);
  return (
    <div className="App">
      <Header />
      {filterTags.length !== 0 && <FilterBar />}
      <JobComponentList />
    </div>
  );
}

export default App;
