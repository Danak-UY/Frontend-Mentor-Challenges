import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 0.75rem 1.5rem;
  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);
  border: none;
  background-color: var(--cl-elements);
  border-radius: 0.25rem;
  transition: 0.3s ease;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: var(--base-font-family);

  &:hover {
    background-color: var(--cl-background);
  }

  ion-icon {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

function Button({ icon = "", text, handleClick }) {
  return (
    <ButtonStyled onClick={handleClick}>
      {icon && <ion-icon name={icon}></ion-icon>}
      {text}
    </ButtonStyled>
  );
}

export default Button;
