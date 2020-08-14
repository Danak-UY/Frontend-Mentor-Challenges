import React, { useState } from "react";
import Badge from "./Badge";
import Tag from "./Tag";

import "./../assets/componentsStyles/JobStyles.css";

const JobComponent = ({
  job,
  location,
  date,
  featured,
  org,
  logo,
  type,
  techs,
  role,
  level,
  languages,
  tools,
}) => {
  const [days] = useState(calculateDays(date));
  const [jobTechs] = useState([
    role,
    level,
    ...(languages || []),
    ...(tools || []),
  ]);

  function calculateDays(date) {
    const jobDate = new Date(date);
    const today = Date.now();

    return Math.ceil((today - jobDate + 1) / 86400000);
  }

  function formatTime(days) {
    if (days < 7) return `${days}d`;
    if (days < 30) return `${Math.floor(days / 7)}w`;
    if (days < 365) return `${Math.floor(days / 30)}m`;
    return `${Math.floor(days / 365)}y`;
  }

  return (
    <article
      className={`flex flex-col lg:flex-row bg-white shadow-lg p-6 pl-8 pt-12 lg:p-6 justify-between align-center rounded-lg transition-shadow duration-300 ease hover:shadow-xl relative 
      ${featured ? "featured-border" : ""}`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center  pb-4 lg:p-0 relative">
        <div className="absolute w-16 lg:static lg:w-auto" style={LogoStyle}>
          <img
            loading="lazy"
            src={logo[0].url}
            alt={`${org} logo`}
            className="w-full"
          />
        </div>
        <div className="lg:ml-4">
          <div className="flex items-center mb-2">
            <h3 className="text-primary font-bold text-primary mr-2">{org}</h3>
            {days <= 5 && <Badge text="NEW!" color="bg-primary" />}
            {featured && (
              <Badge text="featured" color="bg-cyan-veryDarkGraysh" />
            )}
          </div>
          <h2 className="font-bold text-cyan-veryDarkGraysh font-bold mb-2 text-lg cursor-pointer hover:text-primary transition-colors duration-300 ease">
            {job}
          </h2>
          <p className="flex text-cyan-darkGraysh font-medium text-sm flex-wrap">
            <span>{formatTime(days)} ago</span>
            <span>{type}</span>
            <span>{location}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center flex-wrap lg:border-none border-cyan-lightGraysh border-t-2 pt-3 lg:p-0">
        {jobTechs &&
          jobTechs.map((tech, index) => <Tag key={index} text={tech} />)}
      </div>
    </article>
  );
};

const LogoStyle = {
  top: "-5rem",
};

export default JobComponent;
