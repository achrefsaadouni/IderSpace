import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getUserInvitations} from "../../store/actions/profileActions";

class InvitationHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };

    }

    componentDidMount() {
    }

    onClickInvitation = e => {
        console.log(e);
        console.log(this.state.user._id);
        this.props.onClickInvitation(this.state.user._id , e);
    }


    render() {
        const {user} = this.state;
        return (
                <li>
                    <div className="author-thumb">
                        <img style={{width:'33.98px', height:'33.98px'}}
                            src={user.profileImage}
                            alt="author"
                        />
                    </div>
                    <div className="notification-event">
                        <Link to="/" className="h6 notification-friend">
                            {user.firstname} {user.lastname}
                        </Link>
                        <span className="chat-message-item">
                            {user.email}
                          </span>
                    </div>
                    <span className="notification-icon">
                          <a className="accept-request" onClick={this.onClickInvitation.bind(this,true)}>
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"/>
                              </svg>
                            </span>
                          </a>

                          <a className="accept-request request-del" onClick={this.onClickInvitation.bind(this,false)}>
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"/>
                              </svg>
                            </span>
                          </a>
                        </span>

                    <div className="more">
                        <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"/>
                        </svg>
                    </div>
                </li>


        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        profile: state.profile
    };
};

export default connect(mapStateToProps, {

})(InvitationHeader);
