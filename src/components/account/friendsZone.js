import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FriendsZone extends Component {
    render() {
        const friend = this.props.friend;
        console.log(friend);
        return (

                    <li>
                        <Link to="/">
                            <img src={friend.profileImage} style={{width: '33.99px', height: '33.99px'}}
                                 alt="user"/>
                        </Link>
                    </li>
        );
    }
}

export default FriendsZone;
