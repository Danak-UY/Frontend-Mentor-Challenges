import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import OverlayRules from "./OverlayRules";

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

  &::before {
    display: ${({ visible }) => (visible === true ? "block" : "none")};
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: hsl(237, 49%, 15%);
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    padding: 0;
  }
`;

function Rules() {
  const [visible, setVisible] = useState(false);

  function handleToggleClick() {
    setVisible(!visible);
  }

  return (
    <RulesStyled visible={visible}>
      {visible && <OverlayRules handleClick={handleToggleClick} />}
      <Button onClick={handleToggleClick}>Rules</Button>
    </RulesStyled>
  );
}

export default Rules;
