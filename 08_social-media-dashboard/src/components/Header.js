import React from "react";
import "./styles/header.css";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="header-title">
          <h1>Social Media Dashboard</h1>
          <p>
            Total Followers: <span>23,004</span>
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
