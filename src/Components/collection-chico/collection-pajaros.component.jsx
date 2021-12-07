import React from "react";
import CollectionItem from "../colletion-item-chico/collection-item.component";

const CollectionPajaros = ({ title, pajaros }) => (
  <div className="d-flex justify-content-center">
    <h1 className="h1">{title.toUpperCase()}</h1>
    <div className="preview">
      {pajaros
        .filter((pajaro, idx) => idx < 1)
        .map(({ id, ...otherPajaroProp }) => (
          <CollectionItem key={id} {...otherPajaroProp}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPajaros;
