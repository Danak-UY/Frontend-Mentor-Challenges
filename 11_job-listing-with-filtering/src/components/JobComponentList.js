import React, { useState, useEffect } from "react";
import Airtable from "airtable";

import JobComponent from "./JobComponent";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
});
let base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE);

const JobComponentList = () => {
  const [jobsList, setJobsList] = useState([]);

  console.log(jobsList);

  useEffect(() => {
    base("Jobs")
      .select({
        // maxRecords: 6,
        // pageSize: 2,
        sort: [{ field: "Date", direction: "desc" }],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          setJobsList(records.map((record) => record.fields));
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
    <main>
      <JobComponent />
    </main>
  );
};

export default JobComponentList;
