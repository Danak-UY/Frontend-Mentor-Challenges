import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Input from "./Input";

const SearchStyled = styled.div``;

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
      <Input onChange={filterByName} value={inputValue} />
    </SearchStyled>
  );
}

export default Search;
