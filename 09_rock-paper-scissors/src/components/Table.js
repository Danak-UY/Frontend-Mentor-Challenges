import React from "react";
import styled from "styled-components";

import Token from "./Token";

const TableStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Table() {
  return (
    <TableStyled>
      <Token name="scissors" />
      <Token name="paper" />
      <Token name="rock" />
      <Token name="lizard" />
      <Token name="spock" />
    </TableStyled>
  );
}

export default Table;
