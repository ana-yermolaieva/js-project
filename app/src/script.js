import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./components/MainApp.jsx";
import "./css/style.css";

ReactDOM.render(
    <MainApp question="What's happening?" tweet="Note"/>,
    document.getElementById('app')
);