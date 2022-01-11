import React from "react";

function NavigationItems({ item }) {
    return <li><a href={item.link}>{item.title}</a></li>
}

export { NavigationItems };