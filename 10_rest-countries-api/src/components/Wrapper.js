import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
