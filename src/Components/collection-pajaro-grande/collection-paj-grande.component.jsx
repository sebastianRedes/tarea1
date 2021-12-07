import React from 'react';
import CollectionItemGran from '../collection-item-grande/collection-item-grande.component';

const CollectionPajGrande = ({ title, pajaros }) => (
    <div className="d-flex justify-content-center">
        <h1 className="h1">{title.toUpperCase()}</h1>
        <div className="preview">
            {pajaros
                .filter((pajaro, idx) => idx < 2)
                .map(({ id, ...otherPajaroProp }) => (
                    <CollectionItemGran key={id} {...otherPajaroProp}></CollectionItemGran>
                ))}
        </div>
    </div>
);

export default CollectionPajGrande;
