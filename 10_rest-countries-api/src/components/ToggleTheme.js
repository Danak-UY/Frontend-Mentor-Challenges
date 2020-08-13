import React from "react";
import styled from "styled-components";

const ToggleThemeStyled = styled.button`
  background-color: transparent;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--detail-page-body);
  text-transform: capitalize;
  color: var(--cl-text);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  border-radius: 0.5rem;

  &:hover {
    background-color: var(--cl-background);
  }

  ion-icon {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

function ToggleTheme() {
  function handleClick() {}
  return (
    <ToggleThemeStyled onClick={handleClick}>
      <ion-icon name="moon-outline"></ion-icon>
      Dark Mode
    </ToggleThemeStyled>
  );
}

export default ToggleTheme;
