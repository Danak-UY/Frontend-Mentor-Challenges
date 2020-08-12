import React from "react";
import styled, { keyframes } from "styled-components";

const shadowAnimation = keyframes`
  to {
    box-shadow: 
      inset 0px -5px 0px hsla(229, 25%, 31%, 0.12),
      0px 0px 0px 2rem hsla(237, 57%, 56%, .1), 
      0px 0px 0px 4rem hsla(237, 57%, 56%, .05), 
      0px 0px 0px 6rem hsla(237, 57%, 56%, .025);
    /* transform: rotateZ(360deg) scale(1.1) */
  }
`;

const TokenStyled = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  background-image: ${({ color }) => color};
  display: flex;
  box-shadow: inset 0px -5px 0px hsla(229, 25%, 31%, 0.12),
    0px 0px 0px 0rem hsla(237, 57%, 56%, 0.1),
    0px 0px 0px 0rem hsla(237, 57%, 56%, 0.05),
    0px 0px 0px 0rem hsla(237, 57%, 56%, 0.025);
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  border: none;

  animation: 0.8s
    ${({ isShadowAnimated }) => (isShadowAnimated ? shadowAnimation : "")} ease
    forwards;

  ${({ playing }) =>
    !playing &&
    `
    &:active {
      transform: scale(0.95);
      box-shadow: inset 0px -8px 0px hsla(229, 25%, 31%, 0.12);

      & .box {
        box-shadow: inset 0px 6px 0px hsla(229, 25%, 31%, 0.12);
      }
    }
    `}

  &:active {
    transform: scale(0.95);
    box-shadow: inset 0px -8px 0px hsla(229, 25%, 31%, 0.12);

    & .box {
      box-shadow: inset 0px 6px 0px hsla(229, 25%, 31%, 0.12);
    }
  }

  &:hover {
    box-shadow: inset 0px -5px 0px hsla(229, 25%, 31%, 0.12),
      0px 0px 0px 2rem hsla(237, 57%, 56%, 0.1),
      0px 0px 0px 4rem hsla(237, 57%, 56%, 0.05),
      0px 0px 0px 6rem hsla(237, 57%, 56%, 0.025);
    transform: scale(1.3) rotateZ(20deg);
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

  @media screen and (min-width: 768px) {
    transform: scale(1.2);

    ${({ playing }) =>
      playing &&
      `
      width: 12rem;
      height: 12rem;
      padding: 1.2rem;

      .box img {
        width: 4rem
      }
    `}
  }

  @media screen and (min-width: 960px) {
    transform: scale(1.2);

    ${({ playing }) =>
      playing &&
      `
      width: 15rem;
      height: 15rem;
      padding: 1.4rem;

      .box img {
        width: 5rem
      }
    `}
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

function Token({
  name = "",
  onClickEvent,
  isShadowAnimated = false,
  playing = false,
}) {
  function handleClick() {
    if (onClickEvent) onClickEvent(name);
  }

  return (
    <TokenStyled
      color={tokenColors[name]}
      onClick={handleClick}
      isShadowAnimated={isShadowAnimated}
      playing={playing}
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
