import React, { Fragment } from "react";
import "./styles/overview-cards-list.css";
import CardOverview from "./CardOverview";

const cardSmallList = [
  {
    socialMedia: "facebook",
    info: [
      {
        title: "pages views",
        followersNumbersOverview: 87,
        percentage: 3,
      },
      {
        title: "likes",
        followersNumbersOverview: 52,
        percentage: 2,
      },
    ],
  },
  {
    socialMedia: "instagram",
    info: [
      {
        title: "likes",
        followersNumbersOverview: 5462,
        percentage: 2257,
      },
      {
        title: "pages views",
        followersNumbersOverview: "52k",
        percentage: 1375,
      },
    ],
  },
  {
    socialMedia: "twitter",
    info: [
      {
        title: "retweets",
        followersNumbersOverview: 117,
        percentage: 303,
      },
      {
        title: "pages views",
        followersNumbersOverview: 507,
        percentage: 553,
      },
    ],
  },
  {
    socialMedia: "youtube",
    info: [
      {
        title: "likes",
        followersNumbersOverview: 107,
        percentage: -19,
      },
      {
        title: "total views",
        followersNumbersOverview: 1407,
        percentage: -12,
      },
    ],
  },
];

function OverviewCardsList() {
  return (
    <section class="overview-cards">
      <div className="wrapper">
        <h2 className="page-subtitle">Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map((socialMedia, index) => (
            <Fragment key={index}>
              {socialMedia.info.map((info, index) => (
                <CardOverview
                  key={index}
                  socialMedia={socialMedia.socialMedia}
                  {...info}
                />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OverviewCardsList;
