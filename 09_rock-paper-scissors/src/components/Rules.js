import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";

const RulesStyled = styled.div`
  padding: 2rem 0;

  .rules-overlay {
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
  }
`;

function Rules() {
  const [visible, setVisible] = useState(false);

  function handleToggleClick() {
    setVisible(!visible);
  }

  return (
    <RulesStyled>
      {visible && (
        <div className="rules-overlay">
          <h2>Rules</h2>
          <img src="./images/image-rules-bonus.svg" alt="Game Rules" />
          <button className="close-button" onClick={handleToggleClick}>
            <img src="./images/icon-close.svg" alt="Close Icon" />
          </button>
        </div>
      )}
      <Button onClick={handleToggleClick} />
    </RulesStyled>
  );
}

export default Rules;
