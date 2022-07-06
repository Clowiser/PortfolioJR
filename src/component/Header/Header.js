import React from "react";
import style from "./Header.css"
import logo from "../../style/assets/img/logo/JR_CA.png"
import {Outlet, Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav>
                <ul className="menu_navigation_header">
                    <li><img src={logo} alt="Logo du site Jessica Rigaud Créations"/></li>
                    <Link to="/">
                        <li>Accueil</li>
                    </Link>
                    <Link to="/portfolio">
                        <li>Portfolio</li>
                    </Link>
                    <Link to="/biographie">
                        <li>Qui suis-je ?</li>
                    </Link>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

export default Header;