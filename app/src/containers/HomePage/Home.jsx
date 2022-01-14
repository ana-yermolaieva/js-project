import React, {Component} from "react";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Feed } from "./components/Feed/Feed.jsx";
import { PostCreator } from "./components/PostCreator.jsx";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { email: 'elonmusk@google.com', name: 'Elon Musk', content: 'Tesla holiday software release being tested with internal owners today. Broader rollout starts tomorrow evening.' }
            ],
        };
        this.navItems = [
            { id: 1, link: 'index.html', title: 'Home' },
            { id: 2, link: 'index.html', title: 'Profile' },
        ];

    }

    checkPostCreatorInfo = ({ info }) => {
        const { users } = this.state;
        this.setState({
            users: [{ email: 'elonmusk@google.com', name: 'Elon Musk', content: info }, ...users]
        });
    }

    render() {
        return <div className="main_block">
            <Navigation navItems={this.navItems} check={this.props.checkLogout}/>
            <PostCreator onFormSubmit={this.checkPostCreatorInfo} />
            <Feed users={this.state.users}/>
        </div>
    }
};

export { HomePage };