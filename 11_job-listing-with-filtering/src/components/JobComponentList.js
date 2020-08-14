import React from "react";

import Wrapper from "./Wrapper";
import JobComponent from "./JobComponent";

import "./../assets/componentsStyles/JobComponentList.css";

const JobComponentList = ({ jobsList }) => {
  return (
    <Wrapper>
      <main className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 row-gap-16 lg:row-gap-10">
        {jobsList.map((job, index) => (
          <JobComponent {...job} key={index} />
        ))}
      </main>
    </Wrapper>
  );
};

export default JobComponentList;
