import React from "react";

import "./collection-item.style.scss";
const CollectionItem = ({ name, imagesUrl, title }) => (
  <div className="card p-2 bd-highlight mt-5" style={{ width: 500 }}>
    <div
      className="img card-img-top p-2 bd-highlight img-fluid "
      style={{ backgroundImage: `url(${imagesUrl})` }}
    ></div>
    <div className="card-body">
      <h5 className="card-title text-center ">{title} </h5>
      <p className="card-text text-center"> {name}</p>
    </div>
  </div>

);











export default CollectionItem;


