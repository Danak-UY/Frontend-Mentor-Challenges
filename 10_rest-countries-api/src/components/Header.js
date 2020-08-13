import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Wrapper from "./Wrapper";
import ToggleTheme from "./ToggleTheme";

const HeaderStyled = styled.div`
  background-color: var(--cl-elements);
  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);
  padding: 1.5rem 2rem;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: var(--cl-text);
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .header-content {
      padding: 0 2rem;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header-content">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <ToggleTheme />
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
