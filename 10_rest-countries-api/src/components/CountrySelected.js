import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import formatNumbers from "./functions/formatNumbers";

import Button from "./Button";

const CountrySelectedStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 0.75rem;
    strong {
      font-weight: 600;
    }
  }

  h3 {
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .borders {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1rem;
  }

  img {
    max-width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.04);
    margin: 2rem auto;
  }

  .items {
    span {
      margin-right: 5px;
      &:after {
        content: ",";
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    .grid {
      grid-template-columns: 1fr;
    }
    .country-info {
      padding: 2rem 0;
    }
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    grid-gap: 6rem;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

function CountrySelected({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
  alpha3Code,
  handleClick,
}) {
  const countryList = useSelector((state) => state.countryList);
  const [bordersList, setBordersList] = useState([]);

  function findBorders(countryBordersCodes) {
    if (countryBordersCodes.length === 0) return [];
    const list = countryList.filter((item) =>
      countryBordersCodes.includes(item.alpha3Code)
    );
    return list;
  }

  function findCountryByName(countryName) {
    if (countryName === "") return null;
    const [country] = countryList.filter((item) =>
      item.name.toLowerCase().includes(countryName.toLowerCase())
    );
    return country;
  }

  function updateCountry(ev) {
    const countrySelected = findCountryByName(ev.target.innerHTML);
    handleClick(countrySelected);
  }

  useEffect(() => {
    setBordersList(findBorders(borders));
  }, [borders]);

  return (
    <CountrySelectedStyled>
      <img src={flag} alt={`${name} flag`} />
      <div className="country-info">
        <h2>{name}</h2>
        <div className="grid">
          <div>
            <p>
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p>
              <strong>Population:</strong>{" "}
              {`${population ? formatNumbers(population) : population}`}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong> {topLevelDomain}
            </p>
            <p className="items">
              <strong>Currencies:</strong>{" "}
              {currencies.map((item, index) => (
                <span key={index}>{item.name}</span>
              ))}
            </p>
            <p className="items">
              <strong>Languages:</strong>{" "}
              {languages.map((item, index) => (
                <span key={index}>{item.name}</span>
              ))}
            </p>
          </div>
        </div>
        {bordersList.length !== 0 && (
          <>
            <h3>Border Countries:</h3>
            <div className="borders">
              {bordersList.map((item, index) => (
                <Button
                  text={item.name}
                  key={index}
                  handleClick={updateCountry}
                  data-item-set={item.alpha3Code}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </CountrySelectedStyled>
  );
}

export default CountrySelected;
