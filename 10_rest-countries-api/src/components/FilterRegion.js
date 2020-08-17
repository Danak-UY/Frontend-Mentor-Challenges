import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const FilterRegionStyled = styled.div`
  .dropdown {
    border-radius: 0.5rem;
    background-color: var(--cl-elements);
    box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);
    cursor: pointer;
    font-size: 1rem;
    padding: 1.5rem;
    position: relative;
    color: var(--cl-input);
  }
  .dropdown ion-icon {
    margin-left: 1rem;
    color: var(--cl-input);
    position: absolute;
    top: 1.8rem;
    right: 2rem;
  }
  .dropdown.open ion-icon {
    transform: rotate(180deg);
  }
  .dropdown ul {
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--cl-elements);
    box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);
    padding: 0.5rem;
    text-align: left;
    position: absolute;
    top: 0%;
    left: 0;
    list-style-type: none;
    width: 100%;
    z-index: -1;
    opacity: 0;
    height: 0px;
    overflow: hidden;
  }
  .dropdown.open ul {
    opacity: 1;
    top: 100%;
    z-index: 99;
    height: 14.5rem;
  }
  .dropdown.open ul.reset-filter {
    height: 16.8rem;
  }
  .dropdown.open ul.reset-filter::before {
    content: "";
    background-color: var(--cl-background);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    transition: 0.3s ease;
  }
  .dropdown ul li {
    margin: 0.25rem 0;
    padding: 0.5rem 1rem;
    position: relative;
    z-index: 5;

    &:hover {
      color: var(--cl-text);
    }
  }

  @media screen and (min-width: 768px) {
    width: 20rem;
    margin-left: auto;
  }
`;

function FilterRegion() {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const filterByRegion = useSelector((state) => state.filterByRegion);

  const onRegionChange = (selectEvent) => {
    dispatch({
      type: "FILTER_BY_REGION",
      payload: selectEvent,
    });
  };

  function filterByRegionAction(ev) {
    const regionSelected = ev.target.value;
    dispatch({
      type: "FILTER_BY_REGION",
      payload: regionSelected,
    });
  }

  return (
    <FilterRegionStyled onChange={filterByRegionAction}>
      <div
        className={`dropdown ${dropdown ? "open" : ""}`}
        onClick={() => setDropdown(!dropdown)}
      >
        Filter by Region {filterByRegion && `( ${filterByRegion} )`}
        <ion-icon name="chevron-down-outline"></ion-icon>
        <ul className={filterByRegion && "reset-filter"}>
          <li onClick={() => onRegionChange("Africa")}>Africa</li>
          <li onClick={() => onRegionChange("Americas")}>Americas</li>
          <li onClick={() => onRegionChange("Asia")}>Asia</li>
          <li onClick={() => onRegionChange("Europe")}>Europe</li>
          <li onClick={() => onRegionChange("Oceania")}>Oceania</li>
          {filterByRegion && (
            <li onClick={() => onRegionChange("")}>Reset filter</li>
          )}
        </ul>
      </div>
    </FilterRegionStyled>
  );
}

export default FilterRegion;
