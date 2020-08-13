import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: var(--cl-elements);

  ion-icon {
    font-size: 1.5rem;
    color: var(--cl-input);
    padding: 0 2rem;
  }

  input {
    border: none;
    padding: 1.5rem 1rem 1.5rem 0;
    font-family: var(--base-font-family);
    color: var(--cl-input);
    flex: 1;
    background-color: transparent;
    outline: 0;
  }
`;

function Input({ ...props }) {
  return (
    <InputStyled>
      <ion-icon name="search-outline"></ion-icon>
      <input type="text" placeholder="Search for a country..." {...props} />
    </InputStyled>
  );
}

export default Input;
