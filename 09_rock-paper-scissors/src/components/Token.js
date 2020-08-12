import React from "react";
import styled, { keyframes } from "styled-components";

const shadowAnimation = keyframes`
  to {
    box-shadow: 
      inset 0px -5px 0px hsla(229, 25%, 31%, 0.12),
      0px 0px 0px 2rem hsla(237, 57%, 56%, .1), 
      0px 0px 0px 4rem hsla(237, 57%, 56%, .05), 
      0px 0px 0px 6rem hsla(237, 57%, 56%, .025);
  }
`;

const TokenStyled = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  background-image: ${({ color }) => color};
  display: flex;
  box-shadow: inset 0px -5px 0px hsla(229, 25%, 31%, 0.12);
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  border: none;

  animation: 0.8s
    ${({ isShadowAnimated }) => (isShadowAnimated ? shadowAnimation : "")}
    forwards;

  ${({ isShadowAnimated }) =>
    isShadowAnimated &&
    `box-shadow: 
      inset 0px -5px 0px hsla(229, 25%, 31%, 0.12),
      0px 0px 0px 0rem hsla(237, 57%, 56%, .1), 
      0px 0px 0px 0rem hsla(237, 57%, 56%, .05), 
      0px 0px 0px 0rem hsla(237, 57%, 56%, .025);`}

  &:active {
    transform: scale(0.95);
    box-shadow: inset 0px -8px 0px hsla(229, 25%, 31%, 0.12);

    & .box {
      box-shadow: inset 0px 6px 0px hsla(229, 25%, 31%, 0.12);
    }
  }

  .box {
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    box-shadow: inset 0px 4px 0px hsla(229, 25%, 31%, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    padding: 1rem;
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
  "": "hsla(237, 49%, 15%, .2)",
};

function Token({ name = "", onClickEvent, isShadowAnimated = false }) {
  function handleClick() {
    if (onClickEvent) onClickEvent(name);
  }

  return (
    <TokenStyled
      color={tokenColors[name]}
      onClick={handleClick}
      isShadowAnimated={isShadowAnimated}
    >
      {name !== "" && (
        <div className="box">
          <img src={`./images/icon-${name}.svg`} alt={`${name} Token`} />
        </div>
      )}
    </TokenStyled>
  );
}

export default Token;
