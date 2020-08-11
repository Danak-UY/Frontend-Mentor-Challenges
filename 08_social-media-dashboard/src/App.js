import React, { Fragment } from "react";
import "./globals.css";
import Header from "./components/Header";
import TopCardsList from "./components/TopCardsList";
import OverviewCardsList from "./components/OverviewCardsList";

function App() {
  return (
    <Fragment>
      <Header />
      <TopCardsList />
      <OverviewCardsList />
    </Fragment>
  );
}

export default App;
