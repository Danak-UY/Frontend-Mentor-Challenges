import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Input from "./Input";

const SearchStyled = styled.div`
  position: relative;

  .clear-button {
    position: absolute;
    right: 1rem;
    top: 2.1rem;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5rem;
    transition: 0.3s ease;
    width: 3rem;
    height: 3rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--cl-background);
      transform: translateY(-50%) rotate(90deg);
    }

    ion-icon {
      font-size: 1.5rem;
      color: var(--cl-input);
    }
  }
`;

function Search() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = (ev) => {
    setInputValue(ev.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: ev.target.value,
    });
  };

  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });
    setInputValue("");
  };

  return (
    <SearchStyled>
      {inputValue && (
        <button className="clear-button" onClick={clearInput}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      )}
      <Input onChange={filterByName} value={inputValue} />
    </SearchStyled>
  );
}

export default Search;
