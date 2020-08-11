import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border: 2px solid var(--header-outline);
  border-radius: 0.5rem;
  min-width: 8rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: transparent;
  color: var(--white);
  font-family: "Barlow Semi Condensed", sans-serif;

  &:hover {
    background-color: var(--header-outline);
  }
`;

function Button({ ...props }) {
  return <ButtonStyled {...props}>Rules</ButtonStyled>;
}

export default Button;
