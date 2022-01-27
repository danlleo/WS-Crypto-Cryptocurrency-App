import React from "react";
import Banner from "../components/Banner/Banner";
import Cryptoitem from "../components/Cryptoitem/Cryptoitem";

export default function Watchlistpage() {
  const value = JSON.parse(localStorage.getItem("watchlist"));

  return (
    <>
      <Banner />
      <div className="page-container">
        <Cryptoitem
          name={value.name}
          iconUrl={value.iconUrl}
          price={value.price}
          cap={value.cap}
          change={value.change}
          id={value.id}
        />
        <Cryptoitem
          name={value.name}
          iconUrl={value.iconUrl}
          price={value.price}
          cap={value.cap}
          change={value.change}
          id={value.id}
        />
        <Cryptoitem
          name={value.name}
          iconUrl={value.iconUrl}
          price={value.price}
          cap={value.cap}
          change={value.change}
          id={value.id}
        />
        <Cryptoitem
          name={value.name}
          iconUrl={value.iconUrl}
          price={value.price}
          cap={value.cap}
          change={value.change}
          id={value.id}
        />
      </div>
    </>
  );
}
