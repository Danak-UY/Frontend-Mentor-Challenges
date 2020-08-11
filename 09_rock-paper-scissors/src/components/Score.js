import React from "react";
import styled from "styled-components";

const ScoreStyled = styled.main`
  background-color: var(--white);
  text-align: center;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align:items: center;
  flex-direction: column;

  small {
    color: var(--score-text);
    text-transform: uppercase;
  }

  p {
    color: var(--dark-text);
    font-size: 3rem;
    font-weight: 700
  }
`;

function Score() {
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>12</p>
    </ScoreStyled>
  );
}

export default Score;
