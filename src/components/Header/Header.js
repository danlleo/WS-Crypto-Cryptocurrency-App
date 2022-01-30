import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>
          <Link to="/">WS Crypto</Link>
        </h1>
        <ul>
          <li>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
