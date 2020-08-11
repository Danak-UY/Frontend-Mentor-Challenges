import React from "react";
import "./styles/card-overview.css";
import SocialMediaImage from "./SocialMediaImage";

function CardOverview({
  title,
  socialMedia,
  percentage,
  followersNumbersOverview,
}) {
  return (
    <article className="card-small">
      <p className="card-small-title">{title}</p>
      <p className="card-small-icon">
        <SocialMediaImage socialMedia={socialMedia} />
      </p>
      <p className="card-small-numbers">{followersNumbersOverview}</p>
      <p className={`card-today followers-${percentage >= 0 ? "up" : "down"}`}>
        <span>{Math.abs(percentage)}</span>%
      </p>
    </article>
  );
}

export default CardOverview;
