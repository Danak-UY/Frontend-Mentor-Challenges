import React from "react";
import styled from "styled-components";

import Token from "./Token";

const TokenPickedStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    text-transform: uppercase;
    margin-top: 1rem;
    letter-spacing: 2px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;

    p {
      font-size: 1.5rem;
      margin-bottom: 3rem;
    }
  }
`;

function TokenPicked({ token, title, shadowAnimated = false }) {
  return (
    <TokenPickedStyled>
      <Token name={token} isShadowAnimated={shadowAnimated} playing={true} />
      <p>{title}</p>
    </TokenPickedStyled>
  );
}

export default TokenPicked;
