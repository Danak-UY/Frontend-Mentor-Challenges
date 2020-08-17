import React from "react";
import { motion } from "framer-motion";
import "./styles/top-cards-list.css";
import CardSocial from "./CardSocial";

const cardListData = [
  {
    username: "@Danak-UY",
    socialMedia: "facebook",
    followersNumber: 1987,
    followersTitle: "followers",
    followersToday: 12,
  },
  {
    username: "@Danak-UY",
    socialMedia: "twitter",
    followersNumber: 1044,
    followersTitle: "followers",
    followersToday: 99,
  },
  {
    username: "@Danak-UY",
    socialMedia: "instagram",
    followersNumber: "11k",
    followersTitle: "followers",
    followersToday: 1099,
  },
  {
    username: "@Danak-UY",
    socialMedia: "youtube",
    followersNumber: 8239,
    followersTitle: "subscribers",
    followersToday: -144,
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

function TopCardsList() {
  return (
    <section className="card-section">
      <div className="wrapper">
        <motion.div
          className="grid"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          {cardListData.map((user, index) => (
            <motion.div key={index} variants={item}>
              <CardSocial key={index} {...user} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TopCardsList;
