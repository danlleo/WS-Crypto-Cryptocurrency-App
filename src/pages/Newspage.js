import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";

export default function Newspage() {
  return (
    <>
      <Banner />
      <div className="page-container">
        <News simplified={false} />
      </div>
      <Footer />
    </>
  );
}
