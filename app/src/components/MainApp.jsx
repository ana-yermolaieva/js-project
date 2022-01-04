import React from "react";

const MainApp = (props) => {
    return (
        <>
        <nav className="navigation nes-container is-rounded">
            <a href="index.html" className="logo">
                <img className="logo-img" src="./src/img/logo.svg" alt="logo"/>
            </a>
            <ul className="list">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Profile</a></li>
                <li><a href="index.html">Log out</a></li>
            </ul>
        </nav>
        <div className="createpost nes-container is-rounded">
            <textarea className="new-post nes-textarea">{props.question}</textarea>
            <button className="btn-post nes-btn is-primary" type="button">{props.tweet}</button>
        </div>
        <div className="feed">
            <div className="users-post nes-container is-rounded">
                <div className="user">
                    <img className="user-avatar" src="./src/img/elon.png" alt="avatar"/>
                    <span className="user-name">Elon Musk</span>
                    <span className="post-date">2021-12-23</span>
                </div>
                <div className="post-content">
                    <p>Tesla holiday software release being tested with internal owners today. Broader rollout starts tomorrow evening.</p>
                </div>
                <div className="actions">
                    <div className="action-box">
                        <button className="btn-like" type="button"></button>
                        <p className="counter likes">10</p>
                    </div>
                    <div className="action-box">
                        <button className="btn-comment" type="button"></button>
                        <p className="counter comments">5</p>
                    </div>
                    <div className="action-box">
                        <button className="btn-share" type="button"></button>
                        <p className="counter shares">23</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default MainApp;