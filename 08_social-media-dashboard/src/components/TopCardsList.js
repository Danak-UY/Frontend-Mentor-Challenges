import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles/top-cards-list.css";
import CardSocial from "./CardSocial";

const cardListData = [
  {
    username: "@Danak-UY",
    socialMedia: "facebook",
    followersNumber: 57,
    followersTitle: "Followers",
    followersToday: 13,
  },
  {
    username: "@Danak-UY",
    socialMedia: "twitter",
    followersNumber: 162,
    followersTitle: "Followers",
    followersToday: 12,
  },
  {
    username: "@Danak-UY",
    socialMedia: "instagram",
    followersNumber: 160,
    followersTitle: "Followers",
    followersToday: 19,
  },
  {
    username: "@Danak-UY",
    socialMedia: "youtube",
    followersNumber: 78,
    followersTitle: "Subscribers",
    followersToday: -18,
  },
];

const list = {
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
      duration: 0.2,
      staggerDirection: -1,
    },
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
  exit: {
    opacity: 0,
    y: 100,
  },
};

function TopCardsList({ followers }) {
  const [followersArray, setFollowersArray] = useState(cardListData);

  useEffect(() => {
    setFollowersArray(followers);
  }, [followers]);

  return (
    <section className="card-section">
      <div className="wrapper">
        <motion.div
          className="grid"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={list}
        >
          {followersArray.map((socialMedia, index) => (
            <motion.div key={index} variants={item}>
              <CardSocial key={index} {...socialMedia} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TopCardsList;
