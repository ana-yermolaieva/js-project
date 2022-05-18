import React, { Component } from "react";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            account: true,
        };
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit({
            email: this.state.email,
            password: this.state.password,
        });
    }

    handleCreateAccount = () => {
        this.props.onCreate({
            account: false,
        })
    }

    render() {
        return <>
        <div className="login_form">
           <form onSubmit={this.handleFormSubmit}>
                <div className="nes-field">
                    <p className="nes-text">Your email</p>
                    <input type="email"
                    required
                    className={this.props.classError}
                    value={this.state.email}
                    onChange={this.handleEmailChange}/>
                </div>
                <span className="warning_info">{this.props.warning}</span>
                <div className="nes-field">
                    <p className="nes-text">Your password</p>
                    <input type="password"
                    required
                    className="nes-input"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}/>
                </div>
                <button type="submit" className="sub-btn nes-btn is-primary">Log in</button>
            </form>
            <button type="button" className="sub-btn nes-btn" onClick={this.handleCreateAccount}>Create an account</button> 
        </div>
        </>
    }
}

export { LoginForm } ;