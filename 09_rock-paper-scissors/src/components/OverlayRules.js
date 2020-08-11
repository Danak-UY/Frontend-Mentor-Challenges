import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import styled from "styled-components";

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

  .example-enter {
    opacity: 0.01;
    top: 100%;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    top: 0;
    transition: 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
    top: 0;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    top: 100%;
    transition: 300ms ease-in;
  }
`;

function OverlayRules({ handleClick }) {
  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      <OverlayRulesStyled>
        <h2>Rules</h2>
        <img src="./images/image-rules-bonus.svg" alt="Game Rules" />
        <button className="close-button" onClick={handleClick}>
          <img src="./images/icon-close.svg" alt="Close Icon" />
        </button>
      </OverlayRulesStyled>
    </CSSTransitionGroup>
  );
}

export default OverlayRules;
