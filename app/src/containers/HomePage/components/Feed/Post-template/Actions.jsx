import React, { Component } from "react";

class Actions extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            comments: 0,
            shares: 0,
        };
        this.incLike = this.incLike.bind(this);
        this.incComment = this.incComment.bind(this);
        this.incShare = this.incShare.bind(this);
    }

    incLike() {
        this.setState(prevState => ({ likes: prevState.likes+1 }));
    }

    incComment() {
        this.setState(prevState => ({ comments: prevState.comments+1 }));
    }

    incShare() {
        this.setState(prevState => ({ shares: prevState.shares+1 }));
    }

    render() {
        return <div className="actions">
            <div className="action-box">
                <button onClick={this.incLike} className="btn-like" type="button"></button>
                <p className="counter likes">{this.state.likes}</p>
            </div>
            <div className="action-box">
                <button onClick={this.incComment} className="btn-comment" type="button"></button>
                <p className="counter comments">{this.state.comments}</p>
            </div>
            <div className="action-box">
                <button onClick={this.incShare} className="btn-share" type="button"></button>
                <p className="counter shares">{this.state.shares}</p>
            </div>
        </div>
    }
}

export { Actions };