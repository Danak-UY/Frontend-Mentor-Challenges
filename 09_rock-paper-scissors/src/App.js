import React, { useState, createContext } from "react";

import "./App.css";
import styled from "styled-components";

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Table from "./components/Table";
import Rules from "./components/Rules";

export const ScoreContext = createContext();

const AppStyled = styled.main`
  background-image: var(--radial-gradient);
  min-height: 100vh;
  padding: 2rem;
  display: flex;

  .app-content {
    min-height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;

function App() {
  const [score, setScore] = useState(localStorage.getItem("rpsls_score") || 0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  );
}

export default App;
