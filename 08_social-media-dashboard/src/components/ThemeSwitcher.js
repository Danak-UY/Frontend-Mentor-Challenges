import React, { useRef, useEffect } from "react";
import "./styles/theme-switcher.css";

function ThemeSwitcher() {
  const ref = useRef();
  function handleChange() {
    ref.current.checked
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.setAttribute("data-theme", "light");
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      ref.current.click();
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
