import React from "react";
import "./styles/top-cards-list.css";
import CardSocial from "./CardSocial";

const cardListData = [
  {
    username: "@Danak-UY",
    socialMedia: "facebook",
    followersNumber: 1987,
    followersTitle: "followers",
    followersToday: 12,
  },
  {
    username: "@Danak-UY",
    socialMedia: "twitter",
    followersNumber: 1044,
    followersTitle: "followers",
    followersToday: 99,
  },
  {
    username: "@Danak-UY",
    socialMedia: "instagram",
    followersNumber: "11k",
    followersTitle: "followers",
    followersToday: 1099,
  },
  {
    username: "@Danak-UY",
    socialMedia: "youtube",
    followersNumber: 8239,
    followersTitle: "followers",
    followersToday: -144,
  },
];

function TopCardsList() {
  return (
    <section className="card-section">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map(({ user }, index) => (
            <CardSocial key={index} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardsList;
