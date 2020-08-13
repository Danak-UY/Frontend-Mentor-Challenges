import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Wrapper from "./Wrapper";
import Button from "./Button";
import CountrySelected from "./CountrySelected";

const CountryPageStyled = styled.div`
  padding: 2rem;
`;

function CountryPage({ match, history }) {
  const { countryCode } = match.params;
  let DBcountry = useSelector((state) =>
    state.countryList.find((item) => item.alpha3Code === countryCode)
  );
  const [country, setCountry] = useState(DBcountry);

  useEffect(() => {
    if (!country) {
      fetch("https://restcountries.eu/rest/v2/alpha/" + countryCode)
        .then((response) => {
          return response.json();
        })
        .then((country) => {
          setCountry(country);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [match, countryCode]);

  function handleClick() {
    history.goBack();
  }

  return (
    <Wrapper>
      <CountryPageStyled>
        <div className="navigation">
          <Button
            handleClick={handleClick}
            icon="arrow-back-outline"
            text="back"
          />
        </div>
        <CountrySelected {...country} />
      </CountryPageStyled>
    </Wrapper>
  );
}

export default CountryPage;
