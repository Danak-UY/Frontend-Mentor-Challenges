import React from "react";

import "./App.css";
import styled from "styled-components";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

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
      </Wrapper>
    </AppStyled>
  );
}

export default App;
