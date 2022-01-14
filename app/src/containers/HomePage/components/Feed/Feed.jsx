import React from "react";
import { PostTemplate } from "./PostTemplate/PostTemplate.jsx";

let i = 0;

function Feed(props) {
    return <div className="feed">
        {props.users.map(user => {
            ++i;
            return <PostTemplate user={user} key={`index-${i}`} />
        })}
    </div>
}

export { Feed }; 