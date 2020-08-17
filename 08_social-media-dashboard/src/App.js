import React, { Fragment, useState, useEffect } from "react";
import Airtable from "airtable";
import "./globals.css";
import Header from "./components/Header";
import TopCardsList from "./components/TopCardsList";
import OverviewCardsList from "./components/OverviewCardsList";

function orderCardList(crudData) {
  let orderedData = [];
  crudData.forEach((card) => {
    let socialFollowers = {
      username: card.fields.Username,
      socialMedia: card.fields.SocialMedia,
      followersNumber: card.fields.TotalFollowers,
      followersTitle: card.fields.Title,
      followersToday: card.fields.Followers[card.fields.Followers.length - 1],
    };
    orderedData.push(socialFollowers);
  });
  return orderedData;
}

function orderCardOverview(crudData) {
  let orderedData = {};
  crudData.forEach((card) => {
    let socialMedia = card.fields.SocialMedia[0];
    let socialOverview = {
      followers: card.fields.Followers,
      likes: card.fields.Likes,
      pagesViews: card.fields.PageViews,
    };

    if (orderedData[socialMedia]) {
      orderedData[socialMedia].push(socialOverview);
    } else {
      orderedData[socialMedia] = [socialOverview];
    }
  });
  return orderedData;
}

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
});
let base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [cardList, setCardList] = useState([]);
  const [cardOverview, setCardOverview] = useState({});

  useEffect(() => {
    base("Social Media")
      .select({
        view: "Grid view",
        sort: [{ field: "Order", direction: "asc" }],
      })
      .eachPage(
        function page(records) {
          setCardList(orderCardList(records));
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
        view: "Grid view",
        sort: [{ field: "CreatedTime", direction: "desc" }],
      })
      .eachPage(
        function page(records) {
          setCardOverview(orderCardOverview(records));
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
      {cardList.length !== 0 && <TopCardsList followers={cardList} />}

      {cardOverview.length !== 0 && cardList.length !== 0 && (
        <OverviewCardsList followersOverview={cardOverview} />
      )}
    </Fragment>
  );
}

export default App;
