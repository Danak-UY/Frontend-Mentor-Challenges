import React from "react";

import "./App.css";
import styled from "styled-components";

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Table from "./components/Table";
import Rules from "./components/Rules";

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
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
