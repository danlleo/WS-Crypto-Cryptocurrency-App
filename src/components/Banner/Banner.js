import React from "react";
import { Link } from "react-router-dom";

import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <h1>WS Crypto</h1>
      <p>A Cryptocurrencie Web Application</p>
      <Link to="/watchlist">Watchlist</Link>
    </div>
  );
}
