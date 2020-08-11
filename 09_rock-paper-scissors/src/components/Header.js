import React from "react";
import styled from "styled-components";

import Score from "./Score";

const HeaderStyled = styled.div`
  border: 3px solid var(--header-outline);
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    text-transform: uppercase;
    font-size: 1.25rem;
    line-height: 1rem;
    text-shadow: 0px 0px 8px var(--dark-text);
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Rock <br />
        Paper <br />
        Scissors <br />
        Lizard <br />
        Spock
      </h1>
      <Score />
    </HeaderStyled>
  );
}

export default Header;
