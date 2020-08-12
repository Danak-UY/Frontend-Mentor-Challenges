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
`;

function TokenPicked({ token, title, shadowAnimated = false }) {
  return (
    <TokenPickedStyled>
      <Token name={token} isShadowAnimated={shadowAnimated} />
      <p>{title}</p>
    </TokenPickedStyled>
  );
}

export default TokenPicked;
