import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const ToggleThemeStyled = styled.label`
  background-color: transparent;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--detail-page-body);
  text-transform: capitalize;
  color: var(--cl-text);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  border-radius: 0.5rem;
  user-select: none;

  &:hover {
    background-color: var(--cl-background);
  }

  input {
    display: none;
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 0px;
    height: 0px;
  }

  ion-icon {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

function ToggleTheme() {
  const ref = useRef();
  function handleChange() {
    console.log(ref);
    ref.current.checked
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.removeAttribute("data-theme", "dark");
  }

  function evaluateTheme(mq) {
    if (mq.matches) ref.current.click();
    if (!mq.matches && ref.current.checked) ref.current.click();
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(evaluateTheme);
    evaluateTheme(mq);
  }, []);

  return (
    <ToggleThemeStyled>
      <input
        type="checkbox"
        id="toggle-theme"
        onChange={handleChange}
        ref={ref}
      />
      <ion-icon name="moon-outline"></ion-icon>
      Dark Mode
    </ToggleThemeStyled>
  );
}

export default ToggleTheme;
