import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
