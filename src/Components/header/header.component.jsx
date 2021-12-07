import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./header.style.scss";


const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" src={logo} />
        </Link>
        <div className="options">
            <Link className="option" to="/pajaros">
                PAJAROS CHICOS
            </Link>
            <Link className="option" to="/pajaros-grandes">
                PAJAROS GRANDES
            </Link>
            <Link className="option" to="/about">
                ABOUT
            </Link>
        </div>
    </div>
);

export default Header;
