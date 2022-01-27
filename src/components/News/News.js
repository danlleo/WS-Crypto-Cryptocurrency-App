import React, { useState } from "react";
import Newsitem from "../Newsitem/Newsitem";
import { Link } from "react-router-dom";
import { useGetCryptoNewsQuery } from "../../services/newsApi";
import "./News.css";

export default function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 22,
  });

  if (!cryptoNews?.value) return "Loading...";

  return (
    <div className="news">
      <div className="news-header">
        {simplified ? (
          <>
            <h1>Recent News</h1>
            <Link to="/news" className="btn-more">
              See More
            </Link>
          </>
        ) : (
          <>
            <h1>More News</h1>
          </>
        )}
      </div>
      <div className="news-container">
        {cryptoNews.value.map((news, index) => (
          <Newsitem
            name={news.name}
            description={news.description}
            url={news.url}
            image={news?.image?.thumbnail?.contentUrl}
            date={news.datePublished}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
