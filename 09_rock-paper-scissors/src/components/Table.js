import React from "react";
import styled from "styled-components";

import Token from "./Token";

const TableStyled = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-gap: 2rem;
  max-width: 25rem;
  width: 100%;
  // animation: spin 20s linear infinite;
  background-image: url("./images/bg-pentagon.svg");
  background-position: center center;
  background-size: 18rem;
  background-repeat: no-repeat;

  &:hover {
    animation-play-state: paused;
  }

  & .row:nth-child(1) {
    margin-bottom: -3rem;
    display: flex;
    justify-content: center;
  }
  & .row:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
  & .row:nth-child(3) {
    display: flex;
    justify-content: center;
    grid-gap: 2rem;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Table() {
  return (
    <TableStyled>
      <div className="row">
        <Token name="rock" />
      </div>
      <div className="row">
        <Token name="spock" />
        <Token name="paper" />
      </div>
      <div className="row">
        <Token name="lizard" />
        <Token name="scissors" />
      </div>
    </TableStyled>
  );
}

export default Table;
