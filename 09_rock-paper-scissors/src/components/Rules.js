import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import OverlayRules from "./OverlayRules";

const RulesStyled = styled.div`
  padding: 2rem 0;
`;

function Rules() {
  const [visible, setVisible] = useState(false);

  function handleToggleClick() {
    setVisible(!visible);
  }

  return (
    <RulesStyled>
      {visible && <OverlayRules handleClick={handleToggleClick} />}
      <Button onClick={handleToggleClick}>Rules</Button>
    </RulesStyled>
  );
}

export default Rules;
