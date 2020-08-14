import React from "react";
import { useSelector } from "react-redux";

import Wrapper from "./Wrapper";
import JobComponent from "./JobComponent";

const JobComponentList = () => {
  const jobsList = useSelector((state) => {
    if (state.filterTags.length === 0) return state.jobsList;
    return state.jobsFilteredList;
  });
  const filterTags = useSelector((state) => state.filterTags);

  return (
    <Wrapper>
      {filterTags.map((f, k) => (
        <div key={k}>{f}</div>
      ))}
      <main className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 row-gap-16 lg:row-gap-10">
        {jobsList.length === 0 ? (
          <p>Loading</p>
        ) : (
          jobsList.map((job, index) => <JobComponent {...job} key={index} />)
        )}
      </main>
    </Wrapper>
  );
};

export default JobComponentList;
