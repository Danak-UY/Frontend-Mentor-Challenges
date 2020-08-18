import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "./Wrapper";
import TagFilter from "./TagFilter";

const wrapper = {
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.3,
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
      duration: 0.3,
      staggerDirection: -1,
    },
  },
};

const itemTag = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
  },
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { type: "tween", ease: "easeInOut", duration: 0.2 },
  },
};

const FilterBar = () => {
  const dispatch = useDispatch();
  const filterTags = useSelector((state) => state.filterTags);

  const jobsList = useSelector((state) => {
    if (state.filterTags.length === 0) return state.jobsList;
    return state.jobsFilteredList;
  });
  function clearFilter() {
    dispatch({
      type: "CLEAR_FILTER",
      payload: [],
    });
  }
  return (
    <AnimatePresence>
      {filterTags.length !== 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={wrapper}
        >
          <Wrapper>
            <section className="bg-white py-6 px-8 rounded-lg shadow-lg flex items-center justify-between -mt-24 overflow-hidden">
              <div className="flex flex-wrap">
                {filterTags.map((tag, index) => (
                  <motion.div key={index} variants={itemTag}>
                    <TagFilter text={tag} key={index} />
                  </motion.div>
                ))}
              </div>
              <button
                className="text-cyan-darkGraysh hover:text-primary bg-transparent border-none font-bold leading-none"
                onClick={clearFilter}
              >
                Clear
              </button>
            </section>
          </Wrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterBar;
