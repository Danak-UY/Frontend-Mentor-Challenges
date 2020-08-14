import React, { useEffect } from "react";
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
      {filterTags.length !== 0 && <FilterBar />}
      <JobComponentList jobsList={jobsList} />
    </div>
  );
}

export default App;
