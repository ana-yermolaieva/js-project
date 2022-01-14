import React, { Component } from "react";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            nickname: '',
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

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value,
        });
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value,
        });
    }

    handleNicknameChange = (e) => {
        this.setState({
            nickname: e.target.value,
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nickname: this.state.nickname,
        });
        
    }

    render() {
        return <form className="login_form" onSubmit={this.handleFormSubmit}>
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
                    className='nes-input' 
                    value={this.state.password}
                    onChange={this.handlePasswordChange}/>
                </div>
                <div className="nes-field">
                    <p className="nes-text">Firt name</p>
                    <input type="text"
                    required
                    className="nes-input"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}/>
                </div>
                <div className="nes-field">
                    <p className="nes-text">Last name</p>
                    <input type="text"
                    required
                    className="nes-input"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}/>
                </div>
                <div className="nes-field">
                    <p className="nes-text">Nickname</p>
                    <input type="text"
                    required
                    className="nes-input"
                    value={this.state.nickname}
                    onChange={this.handleNicknameChange}/>
                </div>
                <button type="submit" className="nes-btn is-primary">Register</button>
        </form>
    }
}

export { RegisterForm } ;