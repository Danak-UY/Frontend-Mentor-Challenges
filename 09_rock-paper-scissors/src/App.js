import React from "react";

import "./App.css";
import styled from "styled-components";

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Table from "./components/Table";

const AppStyled = styled.main`
  background-image: var(--radial-gradient);
  min-height: 100vh;
  padding: 2rem;
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
    </AppStyled>
  );
}

export default App;
