import React from "react";

import Wrapper from "./Wrapper";
import JobComponent from "./JobComponent";

const JobComponentList = ({ jobsList }) => {
  return (
    <Wrapper>
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
