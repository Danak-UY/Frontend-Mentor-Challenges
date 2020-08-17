import React, { Fragment, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/overview-cards-list.css";
import CardOverview from "./CardOverview";

function loopCardOverviews(objectListCardOverview) {
  let cardsOverview = [];
  Object.keys(objectListCardOverview).forEach((socialMedia) =>
    cardsOverview.push(
      <CardOverview
        socialMedia={socialMedia}
        followersNumbersOverview={
          objectListCardOverview[socialMedia][0].pagesViews
        }
        percentage="-8"
        title="Pages Views"
      />
    )
  );
  return cardsOverview;
}

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
        followersNumbersOverview: 62,
        percentage: 7,
      },
      {
        title: "pages views",
        followersNumbersOverview: 52,
        percentage: -75,
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
        followersNumbersOverview: 57,
        percentage: 53,
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
        followersNumbersOverview: 147,
        percentage: -12,
      },
    ],
  },
];

const list = {
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
};

const item = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeInOut" },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};

const itemOpacity = {
  visible: {
    opacity: 1,
    transition: { type: "tween", ease: "easeInOut", delay: 1 },
  },
  hidden: {
    opacity: 0,
  },
};

function OverviewCardsList({ followersOverview }) {
  const titleControls = useAnimation();
  const itemControls = useAnimation();
  const [followersOverviewArray, setFollowersOverviewArray] = useState(
    cardSmallList
  );

  // useEffect(() => {
  //   setFollowersOverviewArray(loopCardOverviews(followersOverview));
  // }, [followersOverview]);

  const sequence = async () => {
    await titleControls.start("visible");
    return await itemControls.start("visible");
  };
  sequence();

  return (
    <section className="overview-cards">
      <div className="wrapper">
        <motion.h2
          className="page-subtitle"
          initial="hidden"
          animate={titleControls}
          variants={itemOpacity}
        >
          Overview - Today
        </motion.h2>
        <motion.div
          className="grid"
          initial="hidden"
          animate={itemControls}
          variants={list}
        >
          {followersOverviewArray.map((socialMedia, index) => (
            <Fragment key={index}>
              {socialMedia.info.map((info, index) => (
                <motion.div key={index} variants={item}>
                  <CardOverview
                    key={index}
                    socialMedia={socialMedia.socialMedia}
                    {...info}
                  />
                </motion.div>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OverviewCardsList;
