import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Country from "./Country";

const CountryListStyled = styled.div`
  padding: 2rem;
  display: grid;
  justify-content: center
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 3rem;
`;

function CountryList() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);

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
        console.log(list.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CountryListStyled>
      {countryList.map(({ flag, name, population, region, capital }, index) => {
        return (
          <Country
            key={index}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
