import React, {Component} from 'react';
import {Link} from "react-router-dom";
import LastPhotos from './LastPhotos';
import {updatePhoto} from "../../store/actions/profileActions";
import Publications from './publications';
import FriendsZone from './friendsZone';
import {connect} from "react-redux";
import axios from "axios";
import {setCurrentUserAfterUpdate} from "../../store/actions/authActions";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.profile,
            friends: this.props.friends,
            auth: this.props.auth
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
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(result => {

            this.props.onchangePhotoProfile(result.data.message.profileImage);
            if (this.state.user.profileImage !== 'https://res.cloudinary.com/pi-dev/image/upload/v1555884886/bjce0bnez3w7oqbykqre.png') {
                this.setState({
                    user: {
                        ...user,
                        oldPhoto: [...this.state.user.oldPhoto, this.state.user.profileImage],
                        profileImage: result.data.message.profileImage,

                    },


                });
            } else {
                this.setState({
                    user: {
                        ...user,
                        oldPhoto: [...this.state.user.oldPhoto],
                        profileImage: result.data.message.profileImage,

                    },


                })
            }
            this.props.setCurrentUserAfterUpdate({...this.state.user, profileImage: result.data.message.profileImage});
        })

        document.getElementById("update-header-photo").click();

    }

    savePublication = e => {
        let text = '';
        text = document.getElementById("textZonePub").value;
        if (text != '') {
            axios({
                method: 'post',
                url: 'http://localhost:2500/api/user/addPublications',
                data: {pub: text},

            }).then((res) => {
                this.setState({
                    user: res.data.result
                })
            })
            document.getElementById("textZonePub").value = '';
        }
    }


    handleChangewallpapser(e) {
        const {user} = this.state;
        const data = new FormData();
        const file = e.target.files[0];
        data.append("image", file);


        axios({
            method: 'post',
            url: 'http://localhost:2500/api/user/changeCouvertureImage',
            data: data,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(result => {
            this.props.onchangeWallpaper(result.data.message.couverturePhoto);
            this.setState({
                user: {
                    ...user,
                    couverturePhoto: result.data.message.couverturePhoto,

                },


            });

        })

        document.getElementById("update-header-wallpaper").click();

    }

    triggerInput(e) {
        document.getElementById("imageUpload").click();
    }

    triggerInputwallpaper(e) {
        document.getElementById("wallpaperUpload").click();
    }


    render() {
        console.log('___');
        console.log(this.state.friends);
        const profile = this.props.profile;
        const about = this.props.about;
        const skills = this.props.skills;
        const hobbies = this.props.hobbies;
        let listLastPhotos;
        let friendsZone;
        let listPublications;
        try {
            listLastPhotos = this.state.user.oldPhoto.map(photo => (
                <LastPhotos key={photo.toString()} photo={photo}/>
            ));
        } catch (err) {
            listLastPhotos = "no photos";
        }
        try {
            listPublications = this.state.user.publications.reverse().map(publication => (
                <Publications profile={this.state.user} key={publication.id} publication={publication}/>
            ));
        } catch (err) {
            listLastPhotos = "no photos";
        }
        try {
            friendsZone = this.state.friends.map(friend => (
                <FriendsZone profile={this.state.user} key={friend.id} friend={friend}/>
            ));
        } catch (err) {
            friendsZone = "no friends";
        }
        return (
            <div>

                <div className="container">
                    <div className="row">

                        <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="news-feed-form">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active inline-items" data-toggle="tab"
                                               href="#home-1" role="tab" aria-expanded="true">

                                                <svg className="olymp-status-icon">
                                                    <use xlinkHref="#olymp-status-icon"/>
                                                </svg>

                                                <span>Status</span>
                                            </a>
                                        </li>


                                    </ul>

                                    <div className="tab-content">
                                        <div className="tab-pane active" id="home-1" role="tabpanel"
                                             aria-expanded="true">

                                            <div className="author-thumb">
                                                <img src={this.state.user.profileImage}
                                                     style={{width: '35.99px', height: '35.99px'}} alt="author"/>
                                            </div>
                                            <div className="form-group with-icon label-floating is-empty">
                                                <label className="control-label">Share what you are thinking
                                                    here...</label>
                                                <textarea className="form-control" id="textZonePub" placeholder=""/>
                                                <span className="material-input"/></div>
                                            <div className="add-options-message">
                                                <a href="#" className="options-message" data-toggle="tooltip"
                                                   data-placement="top" data-original-title="ADD PHOTOS">
                                                    <svg className="olymp-camera-icon" data-toggle="modal"
                                                         data-target="#update-header-photo">
                                                        <use xlinkHref="#olymp-camera-icon"/>
                                                    </svg>
                                                </a>
                                                <a href="#" className="options-message" data-toggle="tooltip"
                                                   data-placement="top" data-original-title="TAG YOUR FRIENDS">
                                                    <svg className="olymp-computer-icon">
                                                        <use xlinkHref="#olymp-computer-icon"/>
                                                    </svg>
                                                </a>

                                                <a href="#" className="options-message" data-toggle="tooltip"
                                                   data-placement="top" data-original-title="ADD LOCATION">
                                                    <svg className="olymp-small-pin-icon">
                                                        <use xlinkHref="#olymp-small-pin-icon"/>
                                                    </svg>
                                                </a>

                                                <button className="btn btn-primary btn-md-2"
                                                        onClick={this.savePublication.bind(this)}>Post Status
                                                </button>
                                                <button
                                                    className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview
                                                </button>

                                            </div>


                                        </div>

                                        <div className="tab-pane" id="profile-1" role="tabpanel"
                                             aria-expanded="true">
                                            <form>
                                                <div className="author-thumb">
                                                    <img src="img/author-page.jpg" alt="author"/>
                                                </div>
                                                <div className="form-group with-icon label-floating is-empty">
                                                    <label className="control-label">Share what you are thinking
                                                        here...</label>
                                                    <textarea className="form-control" placeholder=""></textarea>
                                                    <span className="material-input"></span></div>
                                                <div className="add-options-message">
                                                    <a href="#" className="options-message" data-toggle="tooltip"
                                                       data-placement="top" data-original-title="ADD PHOTOS">
                                                        <svg className="olymp-camera-icon" data-toggle="modal"
                                                             data-target="#update-header-photo">
                                                            <use xlinkHref="#olymp-camera-icon"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="options-message" data-toggle="tooltip"
                                                       data-placement="top" data-original-title="TAG YOUR FRIENDS">
                                                        <svg className="olymp-computer-icon">
                                                            <use xlinkHref="#olymp-computer-icon"></use>
                                                        </svg>
                                                    </a>

                                                    <a href="#" className="options-message" data-toggle="tooltip"
                                                       data-placement="top" data-original-title="ADD LOCATION">
                                                        <svg className="olymp-small-pin-icon">
                                                            <use xlinkHref="#olymp-small-pin-icon"></use>
                                                        </svg>
                                                    </a>

                                                    <button className="btn btn-primary btn-md-2">Post Status
                                                    </button>
                                                    <button
                                                        className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview
                                                    </button>

                                                </div>

                                            </form>
                                        </div>

                                        <div className="tab-pane" id="blog" role="tabpanel" aria-expanded="true">
                                            <div className="author-thumb">
                                                <img src="img/author-page.jpg" alt="author"/>
                                            </div>
                                            <div className="form-group with-icon label-floating is-empty">
                                                <label className="control-label">Share what you are thinking
                                                    here...</label>
                                                <textarea className="form-control" placeholder=""/>
                                                <span className="material-input"/></div>
                                            <div className="add-options-message">
                                                <a href="#" className="options-message" data-toggle="tooltip"
                                                   data-placement="top" data-original-title="ADD PHOTOS">
                                                    <svg className="olymp-camera-icon" data-toggle="modal"
                                                         data-target="#update-header-photo">
                                                        <use xlinkHref="#olymp-camera-icon"/>
                                                    </svg>
                                                </a>
                                                <a href="#" className="options-message" data-toggle="tooltip"
                                                   data-placement="top" data-original-title="TAG YOUR FRIENDS">
                                                    <svg className="olymp-computer-icon">
                                                        <use xlinkHref="#olymp-computer-icon"/>
                                                    </svg>
                                                </a>

                                                <a href="#" className="options-message" data-toggle="tooltip"
                                                   data-placement="top" data-original-title="ADD LOCATION">
                                                    <svg className="olymp-small-pin-icon">
                                                        <use xlinkHref="#olymp-small-pin-icon"/>
                                                    </svg>
                                                </a>

                                                <button className="btn btn-primary btn-md-2">Post Status
                                                </button>
                                                <button
                                                    className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="newsfeed-items-grid">


                                {listPublications}

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
                                            <span className="title">Email:</span>
                                            <span className="text">{profile.email}</span>
                                        </li>
                                        <li>
                                            <span className="title">Sexe:</span>
                                            <span className="text">{profile.sexe}</span>
                                        </li>
                                        <li>
                                            <span className="title">Adresse:</span>
                                            <span className="text">{profile.adresse}</span>
                                        </li>
                                        <li>
                                            <span className="title">birthday:</span>
                                            <span className="text">{profile.birthday}</span>
                                        </li>
                                    </ul>


                                    {/* show social links if exist */}
                                    {profile.linkedin || profile.github || profile.facebook ? (
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


                                            {profile.facebook ? (
                                                <Link
                                                    to={profile.facebook}
                                                    className="social-item"
                                                    style={{backgroundColor: "#3C5A99"}}
                                                >
                                                    <i className="fab fa-facebook" aria-hidden="true"/>
                                                    facebook
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
                                        {friendsZone}
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
                                <a type="file" onClick={this.triggerInput.bind(this)} href="#"
                                   className="upload-photo-item">
                                    <svg className="olymp-computer-icon">
                                        <use xlinkHref="#olymp-computer-icon"></use>
                                    </svg>

                                    <h6>Upload Photo</h6>
                                    <span>Browse your computer</span>
                                    <input type="file" name="image" onChange={this.handleChange.bind(this)}
                                           id="imageUpload" className="hide" style={{display: 'none'}}/>
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

                <div className="modal fade" id="update-header-wallpaper" tabIndex="-1" role="dialog"
                     aria-labelledby="update-header-wallpaper" style={{display: 'none'}} aria-hidden="true">
                    <div className="modal-dialog window-popup update-header-photo" role="document">
                        <div className="modal-content">
                            <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                                <svg className="olymp-close-icon">
                                    <use xlinkHref="#olymp-close-icon"></use>
                                </svg>
                            </a>

                            <div className="modal-header">
                                <h6 className="title">Update Header wallpaper</h6>
                            </div>

                            <div className="modal-body">
                                <a type="file" onClick={this.triggerInputwallpaper.bind(this)} href="#"
                                   className="upload-photo-item">
                                    <svg className="olymp-computer-icon">
                                        <use xlinkHref="#olymp-computer-icon"></use>
                                    </svg>

                                    <h6>Upload Photo</h6>
                                    <span>Browse your computer</span>
                                    <input type="file" name="image" onChange={this.handleChangewallpapser.bind(this)}
                                           id="wallpaperUpload" className="hide" style={{display: 'none'}}/>
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

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,

    };
};

export default connect(mapStateToProps, {
    updatePhoto,
    setCurrentUserAfterUpdate
})(Profile);
