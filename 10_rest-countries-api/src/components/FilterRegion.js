import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const FilterRegionStyled = styled.select`
  padding: 1rem;
`;

function FilterRegion() {
  const dispatch = useDispatch();

  function filterByRegionAction(ev) {
    const regionSelected = ev.target.value;
    dispatch({
      type: "FILTER_BY_REGION",
      payload: regionSelected,
    });
  }

  return (
    <FilterRegionStyled onChange={filterByRegionAction}>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
    </FilterRegionStyled>
  );
}

export default FilterRegion;
