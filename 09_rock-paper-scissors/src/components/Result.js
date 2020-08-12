import React from "react";
import styled from "styled-components";

import { WhiteButton } from "./Button";

const ResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  p {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
  }

  Button {
    min-width: 15rem;
  }

  @media screen and (min-width: 768px) {
    margin-top: -65vh;
  }
`;

function Result({ title, handleClick }) {
  return (
    <ResultStyled>
      {title !== "" && (
        <>
          <p>{title}</p>
          <WhiteButton onClick={handleClick}>Play Again</WhiteButton>
        </>
      )}
    </ResultStyled>
  );
}

export default Result;
