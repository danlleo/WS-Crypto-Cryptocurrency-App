import React from "react";
import Banner from "../components/Banner/Banner";
import GlobalStats from "../components/GlobalStats/GlobalStats";

import { useGetCryptosQuery } from "../services/cryptoApi";

export default function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <>
      <Banner />
      <div className="page-container">
        <GlobalStats />
      </div>
    </>
  );
}
