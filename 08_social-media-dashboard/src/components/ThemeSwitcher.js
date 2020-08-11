import React from "react";
import "./styles/theme-switcher.css";

function ThemeSwitcher() {
  return (
    <div className="toggle">
      <span>Dark Mode</span>
      <input type="checkbox" id="toggle-theme" />
      <label htmlFor="toggle-theme"></label>
    </div>
  );
}

export default ThemeSwitcher;
