import React, { Component } from "react";
import { HomePage } from "./containers/HomePage/Home.jsx";
import { Login } from "./containers/Login/Login.jsx";

class App extends Component {
    constructor() {
        super();
        this.state = {
            token: localStorage.getItem("auth-token"),
        };
    }

    checkLogin = (token) => {
        this.setState({ token });
    };

    checkLogout = () => {
        this.setState({
            token: null, 
        });
        localStorage.clear();
    };

    checkSignup = (_id) => {
        this.setState({token: _id });
    };

    render() {
        return <>
        {this.state.token ? <HomePage checkLogout={this.checkLogout}/> : <Login checkLogin={this.checkLogin} checkSignup={this.checkSignup}/>}
        </>;
    }
    
};

export default App;