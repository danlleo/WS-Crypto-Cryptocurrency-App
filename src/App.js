import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  Currenciespage,
  Newspage,
  Watchlistpage,
  Cryptopage,
  Notfound,
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
        <Route path="/news" element={<Newspage />} />
        <Route path="/watchlist" element={<Watchlistpage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
