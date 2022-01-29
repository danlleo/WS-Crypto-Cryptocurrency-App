import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  Currenciespage,
  Exchangespage,
  Newspage,
  Watchlistpage,
  Cryptopage,
} from "./pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/crypto/:coinId" element={<Cryptopage />} />
        <Route path="/cryptocurrencies" element={<Currenciespage />} />
        <Route path="/exchanges" element={<Exchangespage />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/watchlist" element={<Watchlistpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
