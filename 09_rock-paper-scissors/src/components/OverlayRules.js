import React, { useContext } from "react";
import styled from "styled-components";

import { LightButton } from "./Button";
import { ScoreContext } from "./../App";

const OverlayRulesStyled = styled.div`
  background-color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 5rem 0;
  transition: 0.8s ease;

  h2 {
    color: var(--dark-text);
    text-transform: uppercase;
    font-size: 2.5rem;
  }

  .close-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #e1e4ed;
      transform: rotate(90deg);
    }
  }

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    right: initial;
    bottom: initial;
    width: auto;
    height: auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;

    h2 {
      margin-bottom: 1rem;
      font-size: 2rem;
      align-self: flex-start;
    }

    .reset-button {
      margin-top: 2rem;
    }

    .close-button {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;

function OverlayRules({ handleClick }) {
  const { score, setScore } = useContext(ScoreContext);

  function resetScore() {
    setScore(0);
    handleClick();
  }

  return (
    <OverlayRulesStyled>
      <h2>Rules</h2>
      <img src="./images/image-rules-bonus.svg" alt="Game Rules" />
      <LightButton className="reset-button" onClick={resetScore}>
        Reset Score
      </LightButton>
      <button className="close-button" onClick={handleClick}>
        <img src="./images/icon-close.svg" alt="Close Icon" />
      </button>
    </OverlayRulesStyled>
  );
}

export default OverlayRules;
