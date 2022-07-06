import React from "react";
import style from "./Footer.css"


const Footer = () => {
    return (
        <>
            <div className="container_infos_footer">
                <ul className="infos_footer">
                    <li>Contact</li>
                    <li>jessica.rigaud.wd@gmail.com</li>
                    <li>Chambéry - 73000</li>
                </ul>
                <ul className="infos_footer">
                    <li>Réseaux Sociaux</li>
                    <li>Linkedin</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </>
    );
}

export default Footer;