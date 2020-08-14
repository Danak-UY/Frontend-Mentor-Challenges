import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./../assets/componentsStyles/FilterBar.css";

import Wrapper from "./Wrapper";
import TagFilter from "./TagFilter";

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
    <Wrapper>
      <section className="bg-white py-6 px-8 rounded-lg shadow-lg flex items-center justify-between -mt-24 overflow-hidden">
        <TransitionGroup className="flex flex-wrap">
          {filterTags.map((tag, index) => (
            <CSSTransition
              in={true}
              key={index}
              timeout={500}
              classNames="fade"
            >
              <TagFilter text={tag} key={index} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <button
          className="text-cyan-darkGraysh hover:text-primary bg-transparent border-none font-bold leading-none"
          onClick={clearFilter}
        >
          Clear
        </button>
      </section>
    </Wrapper>
  );
};

export default FilterBar;
