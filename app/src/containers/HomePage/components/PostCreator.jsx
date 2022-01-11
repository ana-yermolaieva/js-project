import React, { Component } from "react";

class PostCreator extends Component {
    constructor(){
        super();
        this.state = {
            info: "What's happening?",
        };
    }

    handleInfoChange = (e) => {
        this.setState({
            info: e.target.value,
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit({
            info: this.state.info,
        });
        this.setState({
            info: "",
        });
    }

    render() {
        return (
        <form className="createpost nes-container is-rounded" onSubmit={this.handleFormSubmit}>
            <textarea
                ref="info"
                className="new-post nes-textarea"
                value={this.state.info}
                onChange={this.handleInfoChange}></textarea>
            <button className="btn-post nes-btn is-primary" type="submit">"Note"</button>
        </form>
        )
    }
}

export { PostCreator };