import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {


    makeInterface = e => {
        this.props.setInterface('about');
    };
    makeInterfaceAccueil = e => {
        this.props.setInterface('');
    };
    makeinterfaceActivities = e => {
        this.props.setInterface('activities');
    };
    makeinterfaceVideo = e => {
        this.props.setInterface('video');
    };
    makeinterfaceImage = e => {
        this.props.setInterface('photo');
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="top-header">
                                    <div className="top-header-thumb">
                                        <img src="/img/top-header1.jpg" alt="nature"/>
                                    </div>
                                    <div className="profile-section">
                                        <div className="row">
                                            <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                                                <ul className="profile-menu">
                                                    <li style={{cursor: 'pointer'}}
                                                        onClick={this.makeInterfaceAccueil.bind(this)}>
                                                        <a className="active">
                                                            Timeline
                                                        </a>
                                                    </li>
                                                    <li onClick={this.makeInterface.bind(this)}
                                                        style={{cursor: 'pointer'}}>
                                                        <a>About</a>
                                                    </li>
                                                    <li>
                                                        <Link to="06-ProfilePage.html">Friends</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                                <ul className="profile-menu">
                                                    <li onClick={this.makeinterfaceImage.bind(this)}
                                                        style={{cursor: 'pointer'}}>
                                                        <a>Photos</a>
                                                    </li>
                                                    <li onClick={this.makeinterfaceVideo.bind(this)}
                                                        style={{cursor: 'pointer'}}>
                                                        <a>Videos</a>
                                                    </li>
                                                    <li>
                                                        <div className="more">
                                                            <svg className="olymp-three-dots-icon">
                                                                <use
                                                                    xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"/>
                                                            </svg>
                                                            <ul className="more-dropdown more-with-triangle">
                                                                <li>
                                                                    <Link to="/">Report Profile</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Block Profile</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="control-block-button">
                                            <a onClick={this.makeinterfaceActivities.bind(this)}
                                               style={{cursor: 'pointer'}}

                                               className="btn btn-control bg-blue"
                                            >
                                                <svg className="olymp-happy-face-icon">
                                                    <use
                                                        xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"/>
                                                </svg>
                                                <div className="label-avatar bg-grey-light">6</div>
                                            </a>

                                            <Link to="/" className="btn btn-control bg-purple">
                                                <svg className="olymp-chat---messages-icon">
                                                    <use
                                                        xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"/>
                                                </svg>
                                            </Link>

                                            <div className="btn btn-control bg-primary more">
                                                <svg className="olymp-settings-icon">
                                                    <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-settings-icon"/>
                                                </svg>

                                                <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                                                    <li>
                                                        <a href=''
                                                           data-toggle="modal"
                                                           data-target="#update-header-photo"
                                                        ><span>
                                                            Update Profile Photo
                                                        </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"
                                                            data-toggle="modal"
                                                            data-target="#update-header-photo"
                                                        >
                                                            Update Header Photo
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="29-YourAccount-AccountSettings.html">
                                                            Account Settings
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="top-header-author">
                                        <Link to="02-ProfilePage.html" className="author-thumb">
                                            <img src={this.props.image} style={{width: '120px'}} alt="author"/>
                                        </Link>
                                        <div className="author-content">
                                            <Link to="02-ProfilePage.html" className="h5 author-name">
                                                {this.props.profile.firstname} {this.props.profile.lastname}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
