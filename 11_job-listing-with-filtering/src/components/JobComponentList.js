import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Airtable from "airtable";

import Wrapper from "./Wrapper";
import JobComponent from "./JobComponent";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
});
let base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE);

const JobComponentList = () => {
  const dispatch = useDispatch();
  const jobsList = useSelector((state) => {
    if (state.filterTags.length === 0) return state.jobsList;
    return state.jobsFilteredList;
  });

  useEffect(() => {
    base("Jobs")
      .select({
        // maxRecords: 6,
        // pageSize: 2,
        sort: [{ field: "date", direction: "desc" }],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // setJobsList(records.map((record) => record.fields));
          dispatch({
            type: "SET_JOBS_LIST",
            payload: records.map((record) => record.fields),
          });
          // fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

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
