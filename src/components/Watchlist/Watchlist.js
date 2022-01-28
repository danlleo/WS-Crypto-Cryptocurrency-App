import React, { useState, useEffect } from "react";
import Cryptoitem from "../Cryptoitem/Cryptoitem";

import "./Watchlist.css";

export default function Watchlist() {
  const [cryptos, setCryptos] = useState([]);

  const loadData = () => {
    for (let i = 0; i < localStorage.length; i++) {
      setCryptos((prevState) => [
        ...prevState,
        JSON.parse(localStorage.getItem(localStorage.key(i))),
      ]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="watchlist">
      <div className="watchlist-header">
        <h1>Watchlist</h1>
      </div>

      <div className="watchlist-container">
        {cryptos.length ? (
          cryptos.map((coin) => (
            <Cryptoitem
              name={coin.name}
              iconUrl={coin.iconUrl}
              price={coin.price}
              cap={coin.cap}
              change={coin.change}
              id={coin.id}
              key={coin.id}
            />
          ))
        ) : (
          <h3 style={{ color: "var(--main-muted-color)" }}>
            Nothing found, please try add some cryptos...
          </h3>
        )}
      </div>
    </div>
  );
}
