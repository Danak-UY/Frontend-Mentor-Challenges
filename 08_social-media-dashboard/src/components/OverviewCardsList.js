import React, { Fragment, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/overview-cards-list.css";
import CardOverview from "./CardOverview";

function loopCardOverviews(listSocialMedia, overviewSocialMedia) {
  if (!listSocialMedia || !overviewSocialMedia) return [];
  let cardsOverview = [];
  listSocialMedia.forEach((socialMedia) => {
    let mediaName = socialMedia.socialMedia;
    let objectMedia = {
      socialMedia: mediaName,
      info: [],
    };

    let objectOverviewLikes = {
      title: socialMedia.titleViews,
      todayFollowers: overviewSocialMedia[mediaName][0].likes,
      yesterdayFollowers: overviewSocialMedia[mediaName][1].likes,
    };

    let objectOverviewPages = {
      title: socialMedia.titleLikes,
      todayFollowers: overviewSocialMedia[mediaName][0].pagesViews,
      yesterdayFollowers: overviewSocialMedia[mediaName][1].pagesViews,
    };

    objectMedia.info.push(objectOverviewPages);
    objectMedia.info.push(objectOverviewLikes);
    cardsOverview.push(objectMedia);
  });
  return cardsOverview;
}

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

function OverviewCardsList({ followersOverview, followers }) {
  const titleControls = useAnimation();
  const itemControls = useAnimation();
  const followersOverviewArray = useState(
    loopCardOverviews(followers, followersOverview)
  );

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
          {followersOverviewArray.length !== 0 &&
            followersOverviewArray[0].map((socialMediaInfo, index) => (
              <Fragment key={index}>
                {socialMediaInfo.info &&
                  socialMediaInfo.info.map((info, index) => (
                    <motion.div key={index} variants={item}>
                      <CardOverview
                        key={index}
                        socialMedia={socialMediaInfo.socialMedia}
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
