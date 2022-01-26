import React from "react";
import Banner from "../components/Banner/Banner";
import GlobalStats from "../components/GlobalStats/GlobalStats";
import Cryptocurrencies from "../components/Cryptocurrencies/Cryptocurrencies";

export default function Homepage() {
  return (
    <>
      <Banner showBtn={true} />
      <div className="page-container">
        <GlobalStats />
        <Cryptocurrencies simplified={true} />
      </div>
    </>
  );
}
