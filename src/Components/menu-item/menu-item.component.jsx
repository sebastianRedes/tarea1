import React from 'react';
import {withRouter} from 'react-router-dom';

import "./menu-item.style.scss";
const MenuItem = ({ title,imgUrl,linkUrl,history,match }) =>(
    <div className={`${title} menu-item`}
                    onClick={()=> history.push(`${match.url}${linkUrl}`)}>

        <div className="background-image" style={{backgroundImage: `url(${imgUrl})`}}>

        </div>

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle"> VER </span>
        </div>

    </div>
);


export default withRouter(MenuItem);
