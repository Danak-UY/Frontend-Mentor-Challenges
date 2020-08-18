import React from "react";

import Wrapper from "./Wrapper";
import JobComponent from "./JobComponent";
import SkeletonJob from "./SkeletonJob";

const JobComponentList = ({ jobsList, loading }) => {
  return (
    <Wrapper>
      <main className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 row-gap-16 lg:row-gap-10">
        {!loading
          ? jobsList.map((job, index) => <JobComponent {...job} key={index} />)
          : [1, 2, 3, 4].map((item) => <SkeletonJob />)}
      </main>
    </Wrapper>
  );
};

export default JobComponentList;
