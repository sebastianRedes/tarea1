import React from 'react';

import PAJAROS_DATA from "./pajaros.data";
import CollectionPajaros from '../../Components/collection-chico/collection-pajaros.component';
class Pajaro extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: PAJAROS_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div>
                {collections.map(({ id, ...otherCollectionProp }) => (
                    <CollectionPajaros key={id}{...otherCollectionProp}></CollectionPajaros>
                ))}
            </div>
        );

    }
}
export default Pajaro;
