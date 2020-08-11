import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 0.5rem;
  min-width: 8rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: "Barlow Semi Condensed", sans-serif;
  background-color: transparent;
  border: 2px solid var(--header-outline);
  color: var(--white);

  &:hover {
    background-color: var(--header-outline);
  }
`;

function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

export const WhiteButton = styled(ButtonStyled)`
  background-color: var(--white);
  border: 2px solid var(--white);
  color: var(--score-text);

  &:hover {
    background-color: transparent;
    color: var(--white);
  }
`;

export default Button;
