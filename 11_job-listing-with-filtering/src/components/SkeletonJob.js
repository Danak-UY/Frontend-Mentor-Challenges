import React from "react";
import Skeleton from "react-skeleton-loading";

import "./../assets/componentsStyles/SkeletonJob.css";

const SkeletonJob = () => {
  return (
    <article
      className={`flex flex-col lg:flex-row bg-white shadow-lg p-6 pl-8 pt-12 lg:p-6 justify-between align-center rounded-lg transition-shadow duration-300 ease hover:shadow-xl relative skeleton-article`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center  pb-4 lg:p-0 relative">
        <div className="absolute w-16 lg:static lg:w-auto" style={LogoStyle}>
          <Skeleton circle={true} height={80} width={80} />
        </div>
        <div className="lg:ml-4">
          <div className="flex items-center">
            <Skeleton height={20} width={80} />
            <Skeleton width={50} height={20} />
          </div>
          <Skeleton height={30} />
          <p className="flex flex-wrap">
            <Skeleton width={90} />
            <Skeleton width={70} />
            <Skeleton width={80} />
          </p>
        </div>
      </div>
      <div className="flex items-center flex-wrap">
        <Skeleton width={90} height={40} />
        <Skeleton width={70} height={40} />
        <Skeleton width={90} height={40} />
        <Skeleton width={60} height={40} />
      </div>
    </article>
  );
};

const LogoStyle = {
  top: "-6rem",
};

export default SkeletonJob;
