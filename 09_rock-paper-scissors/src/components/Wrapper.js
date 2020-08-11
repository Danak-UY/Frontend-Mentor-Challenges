import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.main`
  max-width: 960px;
  margin: 0 auto;
  align-self: stretch;
  flex: 1;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
