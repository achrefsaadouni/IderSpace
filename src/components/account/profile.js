import React, {Component} from 'react';
import {Link} from "react-router-dom";

import LastPhotos from './LastPhotos';
import ListSkills from "../recommandation/listSkills";
import {updatePhoto} from "../../store/actions/profileActions";
import {connect} from "react-redux";
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : this.props.profile,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.refs.fileUploader.click();
    }

    handleChange(e) {
        const {user} = this.state;
        const data = new FormData();
        const file = e.target.files[0];
        data.append("image", file);
        axios({
            method: 'post',
            url: 'http://localhost:2500/api/user/changeProfilImage',
            data: data,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(result => {
            this.setState({
                user: {
                    ...user,
                    oldPhoto:[...this.state.user.oldPhoto ,this.state.user.profileImage],
                    profileImage: result.data.message.profileImage,

                },

            })
        })

    }


    render() {
        const profile = this.props.profile;
        const about = this.props.about;
        const skills = this.props.skills;
        const hobbies = this.props.hobbies;
        let listLastPhotos;
        try {
            listLastPhotos = this.state.user.oldPhoto.map(photo => (
                <LastPhotos key={photo.toString()} photo={photo}/>
            ));
        } catch (err) {
            listLastPhotos = "no photos";
        }
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
                                                    <li>
                                                        <Link to="02-ProfilePage.html" className="active">
                                                            Timeline
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="05-ProfilePage-About.html">About</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="06-ProfilePage.html">Friends</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                                <ul className="profile-menu">
                                                    <li>
                                                        <Link to="07-ProfilePage-Photos.html">Photos</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="09-ProfilePage-Videos.html">Videos</Link>
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
                                            <Link
                                                to="35-YourAccount-FriendsRequests.html"
                                                className="btn btn-control bg-blue"
                                            >
                                                <svg className="olymp-happy-face-icon">
                                                    <use
                                                        xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"/>
                                                </svg>
                                            </Link>

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
                                            <img src={this.state.user.profileImage} style={{width: '120px'}} alt="author"/>
                                        </Link>
                                        <div className="author-content">
                                            <Link to="02-ProfilePage.html" className="h5 author-name">
                                                {profile.firstname} {profile.lastname}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                            <div id="newsfeed-items-grid">
                                <div className="ui-block">
                                    <article className="hentry post">
                                        <div className="post__author author vcard inline-items">
                                            <img src={profile.profileImage} style={{width: '40px'}} alt="author"/>

                                            <div className="author-date">
                                                <Link
                                                    className="h6 post__author-name fn"
                                                    to="02-ProfilePage.html"
                                                >
                                                    {profile.firstname} {profile.lastname}
                                                </Link>
                                                <div className="post__date">
                                                    <time
                                                        className="published"
                                                        dateTime="2017-03-24T18:18"
                                                    >
                                                        19 hours ago
                                                    </time>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use
                                                        xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"/>
                                                </svg>
                                                <ul className="more-dropdown">
                                                    <li>
                                                        <Link to="/">Edit Post</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">Delete Post</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">Turn Off Notifications</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">Select as Featured</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                            sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque.
                                        </p>

                                        <div className="post-additional-info inline-items">
                                            <Link to="/" className="post-add-icon inline-items">
                                                <svg className="olymp-heart-icon">
                                                    <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-heart-icon"/>
                                                </svg>
                                                <span>8</span>
                                            </Link>

                                            <ul className="friends-harmonic">
                                                <li>
                                                    <Link to="/">
                                                        <img src="/img/friend-harmonic7.jpg" alt="friend"/>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <img src="/img/friend-harmonic8.jpg" alt="friend"/>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <img src="/img/friend-harmonic9.jpg" alt="friend"/>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <img
                                                            src="/img/friend-harmonic10.jpg"
                                                            alt="friend"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <img
                                                            src="/img/friend-harmonic11.jpg"
                                                            alt="friend"
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>

                                            <div className="names-people-likes">
                                                <Link to="/">Jenny</Link>, <Link to="/">Robert</Link>{" "}
                                                and
                                                <br/>6 more liked this
                                            </div>

                                            <div className="comments-shared">
                                                <Link to="/" className="post-add-icon inline-items">
                                                    <svg className="olymp-speech-balloon-icon">
                                                        <use
                                                            xlinkHref="/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"/>
                                                    </svg>
                                                    <span>17</span>
                                                </Link>

                                                <Link to="/" className="post-add-icon inline-items">
                                                    <svg className="olymp-share-icon">
                                                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-share-icon"/>
                                                    </svg>
                                                    <span>24</span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="control-block-button post-control-button">
                                            <Link to="/" className="btn btn-control featured-post">
                                                <svg className="olymp-trophy-icon">
                                                    <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-trophy-icon"/>
                                                </svg>
                                            </Link>

                                            <Link to="/" className="btn btn-control">
                                                <svg className="olymp-like-post-icon">
                                                    <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-like-post-icon"/>
                                                </svg>
                                            </Link>

                                            <Link to="/" className="btn btn-control">
                                                <svg className="olymp-comments-post-icon">
                                                    <use
                                                        xlinkHref="/svg-icons/sprites/icons.svg#olymp-comments-post-icon"/>
                                                </svg>
                                            </Link>

                                            <Link to="/" className="btn btn-control">
                                                <svg className="olymp-share-icon">
                                                    <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-share-icon"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Profile Intro</h6>
                                </div>
                                <div className="ui-block-content">
                                    <ul className="widget w-personal-info item-block">
                                        <li>
                                            <span className="title">About Me:</span>
                                            <span className="text">{about}</span>
                                        </li>
                                        <li>
                                            <span className="title">Skills:</span>
                                            <span className="text">{skills}</span>
                                        </li>
                                        <li>
                                            <span className="title">Hobbies:</span>
                                            <span className="text">{hobbies}</span>
                                        </li>
                                    </ul>


                                    {/* show social links if exist */}
                                    {profile.linkedin || profile.github ? (
                                        <div className="widget w-socials">
                                            <h6 className="title">Other Social Networks:</h6>

                                            {profile.linkedin ? (
                                                <Link
                                                    to={profile.linkedin}
                                                    className="social-item"
                                                    style={{backgroundColor: "#006097"}}
                                                >
                                                    <i className="fab fa-linkedin" aria-hidden="true"/>
                                                    linkedin
                                                </Link>
                                            ) : (
                                                ""
                                            )}

                                            {profile.github ? (
                                                <Link
                                                    to={profile.github}
                                                    className="social-item"
                                                    style={{backgroundColor: "#24292e"}}
                                                >
                                                    <i className="fab fa-github" aria-hidden="true"/>
                                                    github
                                                </Link>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Friends</h6>
                                </div>
                                <div className="ui-block-content">
                                    <ul className="widget w-faved-page js-zoom-gallery">
                                        <li>
                                            <Link to="/">
                                                <img src="/img/avatar26-sm.jpg" alt="user"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src="/img/avatar25-sm.jpg" alt="user"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Last Photos</h6>
                                </div>
                                <div className="ui-block-content">

                                    <ul className="widget w-last-photo js-zoom-gallery">
                                        {listLastPhotos}
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="update-header-photo" tabIndex="-1" role="dialog"
                     aria-labelledby="update-header-photo" style={{display: 'none'}} aria-hidden="true">
                    <div className="modal-dialog window-popup update-header-photo" role="document">
                        <div className="modal-content">
                            <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                                <svg className="olymp-close-icon">
                                    <use xlinkHref="#olymp-close-icon"></use>
                                </svg>
                            </a>

                            <div className="modal-header">
                                <h6 className="title">Update Header Photo</h6>
                            </div>

                            <div className="modal-body">
                                <a href="#" className="upload-photo-item">
                                    <svg className="olymp-computer-icon">
                                        <use xlinkHref="#olymp-computer-icon"></use>
                                    </svg>

                                    <h6>Upload Photo</h6>
                                    <input type="file" name="image" onChange={this.handleChange.bind(this)}
                                           id="imageUpload" className="hide"/>
                                </a>

                                <a href="#" className="upload-photo-item" data-toggle="modal"
                                   data-target="#choose-from-my-photo">

                                    <svg className="olymp-photos-icon">
                                        <use xlinkHref="#olymp-photos-icon"></use>
                                    </svg>

                                    <h6>Choose from My Photos</h6>
                                    <span>Choose from your uploaded photos</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}


export default connect(null, {
    updatePhoto
})(Profile);