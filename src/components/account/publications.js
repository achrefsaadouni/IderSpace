import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";

class Publications extends Component {
    render() {
        const publication = this.props.publication;
        const profile = this.props.profile;
        return (

            <div className="ui-block">>
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
                                <time className="published" dateTime="2017-03-24T18:18">
                                    <Moment format="dddd MM, YYYY \at HH:mm">{publication.date}</Moment>
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
                        {publication.content}
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
        );
    }
}

export default Publications;
