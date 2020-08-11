import React from "react";

import "./App.css";
import styled from "styled-components";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

const AppStyled = styled.main`
  background-image: radial-gradient(
    circle at top,
    hsl(214, 47%, 23%) 10%,
    hsl(237, 49%, 15%)
  );
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
