import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "./Wrapper";
import Country from "./Country";

const CountryListStyled = styled.div`
  padding: 0 4rem;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 3rem;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const ErrorMessage = styled.p`
  padding: 0 2rem;
  text-align: center;
  color: var(--cl-input);
  font-size: 1.2rem;
  transition: 0.3s ease;
  margin: 2rem 0;

  a {
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      color: var(--cl-text);
      text-decoration: underline;
    }
  }
`;

function CountryList() {
  const dispatch = useDispatch();
  const filterByName = useSelector((state) => state.filterByName);
  const fullCountryList = useSelector((state) => state.countryList);

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" || state.filterByName !== "") {
      return state.coutryFilteredList;
    }
    return state.countryList;
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const clearFilter = () => {
    dispatch({
      type: "SET_COUNTRY_LIST",
      payload: fullCountryList,
    });
  };

  return (
    <Wrapper>
      {countryList.length === 0 && filterByName !== "" && (
        <ErrorMessage>
          No countries match the filters, let's{" "}
          <a onClick={clearFilter}>clear the filter</a>
        </ErrorMessage>
      )}
      <CountryListStyled>
        {countryList.map(
          ({ flag, name, population, region, capital, alpha3Code }) => {
            return (
              <Country
                key={alpha3Code}
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
                alpha3Code={alpha3Code}
              />
            );
          }
        )}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
