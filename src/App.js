import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  Currenciespage,
  Exchangespage,
  Newspage,
  Watchlistpage,
} from "./pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Currenciespage />} />
        <Route path="/exchanges" element={<Exchangespage />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/watchlist" element={<Watchlistpage />} />
      </Routes>
    </div>
  );
}

export default App;
