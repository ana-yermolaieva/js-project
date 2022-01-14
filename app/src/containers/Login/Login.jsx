import React, { Component } from "react";
import { LoginForm } from "./components/LoginForm.jsx";
import { RegisterForm } from "./components/RegisterForm.jsx";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            account: true,
            warning: '',
            classError: 'nes-input',
        }
    }

    checkAuthUserInfo = ({ email, password, warning }) => {
        fetch("http://143.198.136.212/api/auth/signin", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                ["content-type"]: "application/json",
            },
        })
        .then((e) => e.json())
        .then(({ token }) => {
            token ? localStorage.setItem("auth-token", token) : localStorage.setItem(null, null);
            token ? this.setState({warning: ''}) : this.setState({warning: `* email address doesn't exist`});
            token ? this.setState({classError: 'nes-input'}) : this.setState({classError: 'nes-input input-error'});
            this.props.checkLogin(token);
        })
    }

    checkRegisterUserInfo = ({ email, password, firstName, lastName, nickname }) => {
        fetch("http://143.198.136.212/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName,
                nickname,
            }),
            headers: {
                ["content-type"]: "application/json",
            },
        })
        .then((e) => e.json())
        .then(({ _id }) => {
            _id ? localStorage.setItem("auth-token", _id) : localStorage.setItem(null, null);
            _id ? this.setState({warning: ''}) : this.setState({warning: `* email address existed`});
            _id ? this.setState({classError: 'nes-input'}) : this.setState({classError: 'nes-input input-error'});
            this.props.checkSignup(_id);
        })
    }

    checkWithoutRegister = () => {
        this.setState({
            account: false,
            warning: '',
            classError: 'nes-input',
        })
    }

    render() {
        return <>
            <img className="login_img" src="../src/img/logo.svg" alt="logo" />
            {this.state.account ?
            <LoginForm
            warning={this.state.warning}
            classError={this.state.classError}
            onFormSubmit={this.checkAuthUserInfo}
            onCreate={this.checkWithoutRegister} /> :
            <RegisterForm
            warning={this.state.warning}
            classError={this.state.classError}
            onFormSubmit={this.checkRegisterUserInfo} />}
        </>
    }
}

export { Login };