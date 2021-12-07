import React from 'react';
import PAJAROS_DATA from '../pajaro/pajaros.data';
import CollectionPajGrande from '../../Components/collection-pajaro-grande/collection-paj-grande.component';


class PajaroGrande extends React.Component {
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
                {collections.map(({ id, ...otherCollectionProps }) => (

                    <CollectionPajGrande key={id}{...otherCollectionProps}></CollectionPajGrande>
                ))}


            </div>
        );
    }
}


export default PajaroGrande;
