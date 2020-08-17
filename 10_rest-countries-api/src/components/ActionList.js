import React from "react";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import Search from "./Search";
import FilterRegion from "./FilterRegion";

const ActionListStyled = styled.div`
  padding: 3rem 2rem;
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

function ActionList() {
  return (
    <Wrapper>
      <ActionListStyled>
        <div className="grid">
          <Search />
          <FilterRegion />
        </div>
      </ActionListStyled>
    </Wrapper>
  );
}

export default ActionList;
