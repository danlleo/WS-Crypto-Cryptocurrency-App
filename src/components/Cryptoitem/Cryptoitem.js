import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

import "./Cryptoitem.css";

export default function Cryptoitem({
  name,
  iconUrl,
  price,
  cap,
  change,
  id,
  simplified,
}) {
  const addToLocalStorage = () => {
    localStorage.setItem(
      "watchlist",
      JSON.stringify({
        name,
        iconUrl,
        price,
        cap,
        change,
        id,
      })
    );

    console.log("Successfully added to local storage!");
  };

  return (
    <div className="cryptoitem">
      <Link to={`/crypto/${id}`}>
        <div className="cryptoitem-header">
          <h2>{name}</h2>
          <img src={iconUrl} alt={name} />
        </div>
        <div className="cryptoitem-body">
          <p>
            Price: <span>{millify(price)}</span>{" "}
          </p>
          <p>
            Market Cap: <span>{millify(cap)}</span>{" "}
          </p>
          <p>
            Daily Change: <span>{millify(change)}</span>{" "}
          </p>
        </div>
      </Link>
      {!simplified && (
        <button className="btn-watchlist" onClick={addToLocalStorage}>
          Add to watchlist
        </button>
      )}
    </div>
  );
}
