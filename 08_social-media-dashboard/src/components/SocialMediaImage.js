import React from "react";

function SocialMediaImage({ socialMedia }) {
  return (
    <img
      src={`${require(`./../images/icon-${socialMedia}.svg`)}`}
      alt={`${socialMedia.replace(/^\w/, (c) => c.toUpperCase())} Logo`}
    />
  );
}

export default SocialMediaImage;
