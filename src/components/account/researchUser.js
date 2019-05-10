import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import {connect} from "react-redux";

class ResearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    clickSendInvitation = e => {
        axios({
            method: 'post',
            url: 'http://localhost:2500/api/user/sendInvitation',
            data: {invitedUser: e},

        }).then((res) => {
            this.props.history.push("/profile");
        })
        console.log(e);
    }
    render() {
        return (
            <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="ui-block" data-mh="friend-groups-item" style={{height: '395.611px'}}>


                    <div className="friend-item friend-groups">

                        <div className="friend-item-content">

                            <div className="more">
                                <svg className="olymp-three-dots-icon">
                                    <use xlinkHref="#olymp-three-dots-icon"/>
                                </svg>
                                <ul className="more-dropdown">
                                    <li>
                                        <a href="#">Report Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Block Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Turn Off Notifications</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="friend-avatar">
                                <div className="author-thumb">
                                    <img src={this.props.user.profileImage} style={{width:'120px',height:'120px'}} alt="Olympus"/>
                                </div>
                                <div className="author-content">
                                    <a href="#" className="h5 author-name">{this.props.user.firstname} {this.props.user.lastname}</a>
                                    <div className="country">{this.props.user.email}</div>
                                </div>
                            </div>



                            <div className="control-block-button">
                                <a onClick={this.clickSendInvitation.bind(this , this.props.user._id)} className="  btn btn-control bg-blue" data-toggle="modal"
                                   data-target="#create-friend-group-add-friends">
                                    <svg className="olymp-happy-faces-icon">
                                        <use xlinkHref="#olymp-happy-faces-icon"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
});

export default withRouter(connect(
    mapStateToProps,
    {}
    )
(ResearchUser));
