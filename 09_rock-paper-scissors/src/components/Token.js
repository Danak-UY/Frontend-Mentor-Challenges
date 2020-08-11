import React from "react";
import styled from "styled-components";

const TokenStyled = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-image: ${(props) => props.color};
  display: flex;
  box-shadow: inset 0px -5px 0px rgba(0, 0, 0, 0.12);
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  transition: 0.3s ease;

  &:active {
    transform: scale(0.95);
    box-shadow: inset 0px -8px 0px rgba(0, 0, 0, 0.12);

    & .box {
      box-shadow: inset 0px 6px 0px rgba(0, 0, 0, 0.12);
    }
  }

  .box {
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    padding: 1rem;
    transition: 0.3s ease;
  }

  .box img {
    width: 2.5rem;
    height: auto;
  }
`;

const tokenColors = {
  paper: "var(--paper-gradient)",
  rock: "var(--rock-gradient)",
  scissors: "var(--scissors-gradient)",
  lizard: "var(--lizard-gradient)",
  spock: "var(--cyan-gradient)",
};

function Token({ name }) {
  return (
    <TokenStyled color={tokenColors[name]}>
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="Name Token" />
      </div>
    </TokenStyled>
  );
}

export default Token;
