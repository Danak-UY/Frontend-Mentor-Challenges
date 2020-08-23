import React from "react";
import "./styles/header.css";
import ThemeSwitcher from "./ThemeSwitcher";
import numeral from "numeral";

function Header({ followers }) {
  return (
    <header>
      <div className="wrapper">
        <div className="header-title">
          <h1>Social Media Dashboard</h1>
          {followers.length !== 0 && (
            <p>
              Total Followers:
              <span>
                {numeral(
                  followers.reduce((acc, item) => acc + item.followersNumber, 0)
                ).format("0.0a")}
              </span>
            </p>
          )}
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
