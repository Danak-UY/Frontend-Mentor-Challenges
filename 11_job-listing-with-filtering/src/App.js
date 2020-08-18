import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Airtable from "airtable";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import JobComponentList from "./components/JobComponentList";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
});
let base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const dispatch = useDispatch();
  const [loadingJobs, setLoadingJobs] = useState(true);
  const jobsList = useSelector((state) => {
    if (state.filterTags.length === 0) return state.jobsList;
    return state.jobsFilteredList;
  });
  const filterTags = useSelector((state) => state.filterTags);

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
          setLoadingJobs(false);
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
    <div className="App">
      <Header />
      <FilterBar />
      <JobComponentList jobsList={jobsList} loading={loadingJobs} />
      <p className="p-4 mb-4 text-center text-cyan-darkGraysh">
        Want to populate the web?
        <a
          href="https://airtable.com/shrRRNlqGAqYuaAw4"
          target="_blank"
          className="text-primary no-underline hover:text-cyan-darkGraysh transition-color duration-200 ease ml-2"
        >
          Upload a fake job! 📮
        </a>
      </p>
    </div>
  );
}

export default App;
