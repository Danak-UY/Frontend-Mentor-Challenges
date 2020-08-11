import React from "react";
import "./styles/card-social.css";

function CardSocial({
  username,
  socialMedia,
  followersNumber,
  followersTitle,
  followersToday,
}) {
  return (
    <article className="card card-facebook">
      <p className="card-user">
        <img
          src="./images/icon-{socialMedia}.svg"
          alt="{socialMedia.replace(/^\w/, c => c.toUpperCase())} Logo"
        />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followersNumber}</span>
        <span className="card-followers-title">{followersTitle}</span>
      </p>
      <p className="card-today followers-up">
        <span>{followersToday}</span> Today
      </p>
    </article>
  );
}

export default CardSocial;
