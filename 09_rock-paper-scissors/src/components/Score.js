import React, { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "./../App";

const ScoreStyled = styled.main`
  background-color: var(--white);
  text-align: center;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align:items: center;
  flex-direction: column;
  min-width: 5rem;

  small {
    color: var(--score-text);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: -0.25rem;
  }

  p {
    color: var(--dark-text);
    font-size: 3rem;
    font-weight: 700
  }
`;

function Score() {
  const { score } = useContext(ScoreContext);
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  );
}

export default Score;
