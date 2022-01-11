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
            { id: 3, link: 'index.html', title: 'Log out' }
        ];
    }

    checkPostCreatorInfo = ({ info }) => {
        console.log(`cheking info: ${info}`);
        const { users } = this.state;
        this.setState({
            users: [...users, { email: 'elonmusk@google.com', name: 'Elon Musk', content: info }]
        });
        console.log(this.state.users);
    }

    render() {
        return <>
        <Navigation navItems={this.navItems}/>
        <PostCreator onFormSubmit={this.checkPostCreatorInfo} />
        <Feed users={this.state.users}/>
        </>
    }
};

export { HomePage };