import React, { useState, useEffect } from "react";
import Cryptoitem from "../Cryptoitem/Cryptoitem";
import { useGetCryptosQuery } from "../../services/cryptoApi";

import "./Cryptocurrencies.css";
import { Link } from "react-router-dom";

export default function Cryptocurrencies({ simplified }) {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(
    simplified ? 10 : 100
  );

  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <div className="cryptocurrencies">
      <div className="cryptocurrencies-header">
        {simplified ? (
          <>
            <h1>Top 10 Cryptocurrencies</h1>
            <Link to="/cryptocurrencies" className="btn-more">
              See More
            </Link>
          </>
        ) : (
          <>
            <h1>Cryptocurrencies</h1>
            <div className="input-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter the name of the cryptocurrency.."
              />
            </div>
          </>
        )}
      </div>

      <div className="cryptocurrencies-container">
        {cryptos.length >= 1 ? (
          cryptos?.map((coin) => (
            <Cryptoitem
              name={coin.name}
              iconUrl={coin.iconUrl}
              price={coin.price}
              cap={coin.marketCap}
              change={coin.change}
              id={coin.uuid}
              key={coin.uuid}
            />
          ))
        ) : (
          <h3 style={{ color: "var(--main-muted-color)" }}>
            Nothing found, please try something else...
          </h3>
        )}
      </div>
    </div>
  );
}
