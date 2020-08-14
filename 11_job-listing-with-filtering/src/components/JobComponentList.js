import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Wrapper from "./Wrapper";
import JobComponent from "./JobComponent";

import "./../assets/componentsStyles/JobComponentList.css";

const JobComponentList = ({ jobsList }) => {
  return (
    <Wrapper>
      <TransitionGroup className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 row-gap-16 lg:row-gap-10">
        {jobsList.length === 0 ? (
          <p>Loading</p>
        ) : (
          jobsList.map((job, index) => (
            <CSSTransition
              in={true}
              key={index}
              timeout={300}
              classNames="item"
            >
              <JobComponent {...job} key={index} />
            </CSSTransition>
          ))
        )}
      </TransitionGroup>
    </Wrapper>
  );
};

export default JobComponentList;
