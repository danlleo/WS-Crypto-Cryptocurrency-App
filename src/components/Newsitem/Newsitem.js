import React from "react";
import moment from "moment";

import "./Newsitem.css";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

export default function Newsitem({
  name,
  description,
  url,
  image,
  date,
  simplified,
}) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="newsitem">
        <div className="newsitem_header">
          <img src={image || demoImage} alt={name} />
          <p>{moment(date).startOf("ss").fromNow()}</p>
        </div>
        <div className="newsitem_body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}
