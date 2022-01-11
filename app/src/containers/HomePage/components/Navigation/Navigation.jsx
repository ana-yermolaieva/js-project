import React from "react";
import { NavigationItems } from "./NavigationItems.jsx";

function Navigation(props) {
    return <nav className="navigation nes-container is-rounded">
        <a href="index.html" className="logo">
            <img className="logo-img" src="../src/img/logo.svg" alt="logo"/>
        </a>
        <ul className="list">
            {props.navItems.map(item => {
                return <NavigationItems item={item} key={item.id} />
            })}
        </ul>
    </nav>
} 

export { Navigation }; 