import React from "react";
import "./styles/card-social.css";
import SocialMediaImage from "./SocialMediaImage";

function CardSocial({
  username,
  socialMedia,
  followersNumber,
  followersTitle,
  followersToday,
}) {
  return (
    <article className={`card card-${socialMedia}`}>
      <p className="card-user">
        <SocialMediaImage socialMedia={socialMedia} />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followersNumber}</span>
        <span className="card-followers-title">{followersTitle}</span>
      </p>
      <p
        className={`card-today followers-${
          followersToday >= 0 ? "up" : "down"
        }`}
      >
        <span>{Math.abs(followersToday)}</span> Today
      </p>
    </article>
  );
}

export default CardSocial;
