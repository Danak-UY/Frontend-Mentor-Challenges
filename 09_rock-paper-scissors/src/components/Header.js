import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  padding: 2rem;
  color: white;
  border-radius: 0.5rem;

  h1 {
    text-transform: uppercase;
    font-size: 1.25rem;
    line-height: 1;
    margin: 0;
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
    </HeaderStyled>
  );
}

export default Header;
