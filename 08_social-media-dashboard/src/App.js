import React, { Fragment, useState, useEffect } from "react";
import Airtable from "airtable";
import "./globals.css";
import Header from "./components/Header";
import TopCardsList from "./components/TopCardsList";
import OverviewCardsList from "./components/OverviewCardsList";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
});
let base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [cardList, setCardList] = useState({});
  const [cardOverview, setCardOverview] = useState({});
  console.log(cardList);
  console.log(cardOverview);

  useEffect(() => {
    base("Social Media")
      .select({})
      .eachPage(
        function page(records) {
          setCardList(records);
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  useEffect(() => {
    base("New Followers")
      .select({
        maxRecords: 8,
        sort: [{ field: "Created Time", direction: "desc" }],
      })
      .eachPage(
        function page(records) {
          setCardOverview(records);
          records.forEach((record) => {
            console.log(
              "Followers",
              record.get("Social Media"),
              record.get("Created Time")
            );
          });
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
    <Fragment>
      <Header />
      <TopCardsList followers={cardList} followersOverview={cardOverview} />
      <OverviewCardsList followersOverview={cardOverview} />
    </Fragment>
  );
}

export default App;
