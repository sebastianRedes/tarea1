import React from 'react';

import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Pajaros pequeños',
                    imgUrl: "https://aves.ninjas.cl/api/site/assets/files/3124/06082018101359pilpilen_leslie_brackenridge_b.200x0.jpg",
                    id: 1,
                    linkUrl: 'pajaros'
                },
                {
                    title: 'Pajaros grandes',
                    imgUrl: "https://aves.ninjas.cl/api/site/assets/files/3102/18082018072023pato_juarjual_pedro_valencia_web.200x0.jpg",
                    id: 2,
                    linkUrl: 'pajaros-grandes'
                },
            ]
        };
    }


    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))

                }
            </div>
        );
    }


}


export default Directory;
