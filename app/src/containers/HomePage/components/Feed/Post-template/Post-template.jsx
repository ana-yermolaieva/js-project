import React from "react";
import { Actions } from "./Actions.jsx";
import { Avatar } from "./Avatar.jsx";

let date = new Date();
function PostTemplate({user}) {
    return (<div className="users-post nes-container is-rounded">
            <div className="user">
                <Avatar />
                <span className="user-name">{user.name}</span>
                <span className="post-date">{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</span>
            </div>
            <div className="post-content">
                <p>{user.content}</p>
            </div>
            <Actions />
        </div>
    )
}

export { PostTemplate } ; 