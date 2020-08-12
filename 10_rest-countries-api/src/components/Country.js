import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  max-width: 20rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: var(--cl-elements);
  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.04);

  .country-flag {
    img {
      max-width: 100%;
      height: auto;
      transform: translate;
    }
  }

  .country-info {
    padding: 1.5rem;
    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    p {
      margin-bottom: 0.5rem;

      strong {
        font-weight: 600;
      }
    }
  }
`;

function Country({ flag, name, population, region, capital }) {
  return (
    <CountryStyled>
      <div className="country-flag">
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className="country-info">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
