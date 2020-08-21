import React from "react";
import "./styles/card-overview.css";
import SocialMediaImage from "./SocialMediaImage";
import numeral from "numeral";

function CardOverview({
  title,
  socialMedia,
  todayFollowers,
  yesterdayFollowers,
}) {
  const percentage = todayFollowers / yesterdayFollowers;
  return (
    <article className="card-small">
      <p className="card-small-title">{title}</p>
      <p className="card-small-icon">
        <SocialMediaImage socialMedia={socialMedia} />
      </p>
      <p className="card-small-numbers">{todayFollowers}</p>
      <p className={`card-today followers-${percentage >= 0 ? "up" : "down"}`}>
        <span>{numeral(percentage).format("0%")}</span>
      </p>
    </article>
  );
}

export default CardOverview;
