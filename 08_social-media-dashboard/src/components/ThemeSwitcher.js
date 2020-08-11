import React, { useRef, useEffect } from "react";
import "./styles/theme-switcher.css";

function ThemeSwitcher() {
  const ref = useRef();
  function handleChange() {
    ref.current.checked
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.setAttribute("data-theme", "light");
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
    <div className="toggle">
      <span>Dark Mode</span>
      <input
        type="checkbox"
        id="toggle-theme"
        onChange={handleChange}
        ref={ref}
      />
      <label htmlFor="toggle-theme"></label>
    </div>
  );
}

export default ThemeSwitcher;
