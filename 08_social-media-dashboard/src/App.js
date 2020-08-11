import React, { Fragment } from "react";
import "./globals.css";
import Header from "./components/Header";
import TopCardsList from "./components/TopCardsList";

function App() {
  return (
    <Fragment>
      <Header />
      <TopCardsList />
    </Fragment>
  );
}

export default App;
