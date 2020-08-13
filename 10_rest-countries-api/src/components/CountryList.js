import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "./Wrapper";
import Country from "./Country";

const CountryListStyled = styled.div`
  padding: 0 4rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 3rem;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

function CountryList() {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

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

  return (
    <Wrapper>
      <CountryListStyled>
        {countryList
          .filter(({ cioc }) => cioc)
          .map(({ flag, name, population, region, capital, cioc }) => {
            return (
              <Country
                key={cioc}
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
                cioc={cioc}
              />
            );
          })}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
