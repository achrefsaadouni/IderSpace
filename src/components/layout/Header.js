import React, { Component } from "react";
import logo from "./../../logoWhite.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";

class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <header className="header" id="site-header">
          <div className="page-title">
            <img width={200} src={logo} alt="Olympus" />
          </div>

          <div className="header-content-wrapper">
            <form className="search-bar w-search notification-list friend-requests">
              <div className="form-group with-button">
                <input
                  className="form-control js-user-search"
                  placeholder="Search here people or pages..."
                  type="text"
                />
                <button>
                  <svg className="olymp-magnifying-glass-icon">
                    <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                  </svg>
                </button>
              </div>
            </form>

            <Link to="/" className="link-find-friend">
              Find Friends
            </Link>

            <div className="control-block">
              <div className="control-icon more has-items">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                </svg>
                <div className="label-avatar bg-blue">6</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">FRIEND REQUESTS</h6>
                    <Link to="/">Find Friends</Link>
                    <Link to="/">Settings</Link>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list friend-requests">
                      <li>
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar55-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <Link to="/" className="h6 notification-friend">
                            Tamara Romanoff
                          </Link>
                          <span className="chat-message-item">
                            Mutual Friend: Sarah Hetfield
                          </span>
                        </div>
                        <span className="notification-icon">
                          <Link to="/" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>

                          <Link to="/" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar56-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <Link to="/" className="h6 notification-friend">
                            Tony Stevens
                          </Link>
                          <span className="chat-message-item">
                            4 Friends in Common
                          </span>
                        </div>
                        <span className="notification-icon">
                          <Link to="/" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>

                          <Link to="/" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>

                      <li className="accepted">
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar57-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          You and{" "}
                          <Link to="/" className="h6 notification-friend">
                            Mary Jane Stark
                          </Link>{" "}
                          just became friends. Write on{" "}
                          <Link to="/" className="notification-link">
                            her wall
                          </Link>
                          .
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar58-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <Link to="/" className="h6 notification-friend">
                            Stagg Clothing
                          </Link>
                          <span className="chat-message-item">
                            9 Friends in Common
                          </span>
                        </div>
                        <span className="notification-icon">
                          <Link to="/" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>

                          <Link to="/" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Link to="/" className="view-all bg-blue">
                    Check all your Events
                  </Link>
                </div>
              </div>

              <div className="control-icon more has-items">
                <svg className="olymp-chat---messages-icon">
                  <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                </svg>
                <div className="label-avatar bg-purple">2</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Chat / Messages</h6>
                    <Link to="/">Mark all as read</Link>
                    <Link to="/">Settings</Link>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list chat-message">
                      <li className="message-unread">
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar59-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <Link to="/" className="h6 notification-friend">
                            maliik
                          </Link>
                          <span className="chat-message-item">
                            Hi James! It’s Diana, I just wanted to let you know
                            that we have to reschedule...
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              4 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar60-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <Link to="/" className="h6 notification-friend">
                            Jake Parker
                          </Link>
                          <span className="chat-message-item">
                            Great, I’ll see you tomorrow!.
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              4 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                          </svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar61-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <Link to="/" className="h6 notification-friend">
                            Elaine Dreyfuss
                          </Link>
                          <span className="chat-message-item">
                            We’ll have to check that at the office and see if
                            the client is on board with...
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              Yesterday at 9:56pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>

                      <li className="chat-group">
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar11-sm.jpg"
                            }
                            alt="author"
                          />
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar12-sm.jpg"
                            }
                            alt="author"
                          />
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar13-sm.jpg"
                            }
                            alt="author"
                          />
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar10-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <Link to="/" className="h6 notification-friend">
                            You, Faye, Ed &amp; Jet +3
                          </Link>
                          <span className="last-message-author">Ed:</span>
                          <span className="chat-message-item">
                            Yeah! Seems fine by me!
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              March 16th at 10:23am
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Link to="/" className="view-all bg-purple">
                    View All Messages
                  </Link>
                </div>
              </div>

              <div className="control-icon more has-items">
                <svg className="olymp-thunder-icon">
                  <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-thunder-icon" />
                </svg>

                <div className="label-avatar bg-primary">8</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Notifications</h6>
                    <Link to="/">Mark all as read</Link>
                    <Link to="/">Settings</Link>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list">
                      <li>
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar62-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            <Link to="/" className="h6 notification-friend">
                              Mathilda Brinker
                            </Link>{" "}
                            commented on your new{" "}
                            <Link to="/" className="notification-link">
                              profile status
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              4 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                          </svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>

                      <li className="un-read">
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar63-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            You and{" "}
                            <Link to="/" className="h6 notification-friend">
                              Nicholas Grissom
                            </Link>{" "}
                            just became friends. Write on{" "}
                            <Link to="/" className="notification-link">
                              his wall
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              9 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>

                      <li className="with-comment-photo">
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar64-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            <Link to="/" className="h6 notification-friend">
                              Sarah Hetfield
                            </Link>{" "}
                            commented on your{" "}
                            <Link to="/" className="notification-link">
                              photo
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              Yesterday at 5:32am
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                          </svg>
                        </span>

                        <div className="comment-photo">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/comment-photo1.jpg"
                            }
                            alt="photo1"
                          />
                          <span>
                            “She looks incredible in that outfit! We should see
                            each...”
                          </span>
                        </div>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar65-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            <Link to="/" className="h6 notification-friend">
                              Green Goo Rock
                            </Link>{" "}
                            invited you to attend to his event Goo in{" "}
                            <Link to="/" className="notification-link">
                              Gotham Bar
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              March 5th at 6:43pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/avatar66-sm.jpg"
                            }
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            <Link to="/" className="h6 notification-friend">
                              {user.username}
                            </Link>{" "}
                            commented on your new{" "}
                            <Link to="/" className="notification-link">
                              profile status
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              March 2nd at 8:29pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-heart-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-heart-icon" />
                          </svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Link to="/" className="view-all bg-primary">
                    View All Notifications
                  </Link>
                </div>
              </div>

              <div className="author-page author vcard inline-items more">
                <div className="author-thumb">
                  <img
                    alt="author"
                    src={process.env.PUBLIC_URL + "/img/author-page.jpg"}
                    className="avatar"
                  />
                  <span className="icon-status online" />
                  <div className="more-dropdown more-with-triangle">
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                      <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">Your Account</h6>
                      </div>

                      <ul className="account-settings">
                        <li>
                          <Link to="/edit-profile">
                            <svg className="olymp-menu-icon">
                              <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-menu-icon" />
                            </svg>

                            <span>Profile Settings</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <svg
                              className="olymp-star-icon left-menu-icon"
                              data-toggle="tooltip"
                              data-placement="right"
                              data-original-title="FAV PAGE"
                            >
                              <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-star-icon" />
                            </svg>

                            <span>Create Fav Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" onClick={this.props.logoutUser}>
                            <svg className="olymp-logout-icon">
                              <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-logout-icon" />
                            </svg>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link to="/profile" className="author-name fn">
                  <div className="author-title">
                    {user.username}
                    <svg className="olymp-dropdown-arrow-icon">
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon" />
                    </svg>
                  </div>
                  <span className="author-subtitle">SPACE COWBOY</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <header
          className="header header-responsive"
          id="site-header-responsive"
        >
          <div className="header-content-wrapper">
            <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
              <li className="nav-item">
                <Link className="nav-link" data-toggle="tab" to="/" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                    <div className="label-avatar bg-blue">6</div>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" data-toggle="tab" to="/" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                    </svg>
                    <div className="label-avatar bg-purple">2</div>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" data-toggle="tab" to="/" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-thunder-icon">
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-thunder-icon" />
                    </svg>
                    <div className="label-avatar bg-primary">8</div>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" data-toggle="tab" to="/" role="tab">
                  <svg className="olymp-magnifying-glass-icon">
                    <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                  </svg>
                  <svg className="olymp-close-icon">
                    <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-close-icon" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className="tab-content tab-content-responsive">
            <div className="tab-pane " id="request" role="tabpanel">
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">FRIEND REQUESTS</h6>
                  <Link to="/">Find Friends</Link>
                  <Link to="/">Settings</Link>
                </div>
                <ul className="notification-list friend-requests">
                  <li>
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar55-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <Link to="/" className="h6 notification-friend">
                        Tamara Romanoff
                      </Link>
                      <span className="chat-message-item">
                        Mutual Friend: Sarah Hetfield
                      </span>
                    </div>
                    <span className="notification-icon">
                      <Link to="/" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </Link>

                      <Link to="/" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </Link>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar56-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <Link to="/" className="h6 notification-friend">
                        Tony Stevens
                      </Link>
                      <span className="chat-message-item">
                        4 Friends in Common
                      </span>
                    </div>
                    <span className="notification-icon">
                      <Link to="/" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </Link>

                      <Link to="/" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </Link>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                  <li className="accepted">
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar57-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      You and{" "}
                      <Link to="/" className="h6 notification-friend">
                        Mary Jane Stark
                      </Link>{" "}
                      just became friends. Write on{" "}
                      <Link to="/" className="notification-link">
                        her wall
                      </Link>
                      .
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                      </svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar58-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <Link to="/" className="h6 notification-friend">
                        Stagg Clothing
                      </Link>
                      <span className="chat-message-item">
                        9 Friends in Common
                      </span>
                    </div>
                    <span className="notification-icon">
                      <Link to="/" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </Link>

                      <Link to="/" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </Link>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                </ul>
                <Link to="/" className="view-all bg-blue">
                  Check all your Events
                </Link>
              </div>
            </div>

            <div className="tab-pane " id="chat" role="tabpanel">
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Chat / Messages</h6>
                  <Link to="/">Mark all as read</Link>
                  <Link to="/">Settings</Link>
                </div>

                <ul className="notification-list chat-message">
                  <li className="message-unread">
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar59-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <Link to="/" className="h6 notification-friend">
                        Diana Jameson
                      </Link>
                      <span className="chat-message-item">
                        Hi James! It’s Diana, I just wanted to let you know that
                        we have to reschedule...
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar60-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <Link to="/" className="h6 notification-friend">
                        Jake Parker
                      </Link>
                      <span className="chat-message-item">
                        Great, I’ll see you tomorrow!.
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                      </svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar61-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <Link to="/" className="h6 notification-friend">
                        Elaine Dreyfuss
                      </Link>
                      <span className="chat-message-item">
                        We’ll have to check that at the office and see if the
                        client is on board with...
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 9:56pm
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>

                  <li className="chat-group">
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar11-sm.jpg"}
                        alt="author"
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar12-sm.jpg"}
                        alt="author"
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar13-sm.jpg"}
                        alt="author"
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar10-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <Link to="/" className="h6 notification-friend">
                        You, Faye, Ed &amp; Jet +3
                      </Link>
                      <span className="last-message-author">Ed:</span>
                      <span className="chat-message-item">
                        Yeah! Seems fine by me!
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          March 16th at 10:23am
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                </ul>

                <Link to="/" className="view-all bg-purple">
                  View All Messages
                </Link>
              </div>
            </div>

            <div className="tab-pane " id="notification" role="tabpanel">
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Notifications</h6>
                  <Link to="/">Mark all as read</Link>
                  <Link to="/">Settings</Link>
                </div>

                <ul className="notification-list">
                  <li>
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar62-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        <Link to="/" className="h6 notification-friend">
                          Mathilda Brinker
                        </Link>{" "}
                        commented on your new{" "}
                        <Link to="/" className="notification-link">
                          profile status
                        </Link>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-comments-post-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                      </svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>

                  <li className="un-read">
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar63-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        You and{" "}
                        <Link to="/" className="h6 notification-friend">
                          Nicholas Grissom
                        </Link>{" "}
                        just became friends. Write on{" "}
                        <Link to="/" className="notification-link">
                          his wall
                        </Link>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          9 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                      </svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>

                  <li className="with-comment-photo">
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar64-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        <Link to="/" className="h6 notification-friend">
                          Sarah Hetfield
                        </Link>{" "}
                        commented on your{" "}
                        <Link to="/" className="notification-link">
                          photo
                        </Link>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 5:32am
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-comments-post-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                      </svg>
                    </span>

                    <div className="comment-photo">
                      <img
                        src={process.env.PUBLIC_URL + "/img/comment-photo1.jpg"}
                        alt="photo1"
                      />
                      <span>
                        “She looks incredible in that outfit! We should see
                        each...”
                      </span>
                    </div>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar65-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        <Link to="/" className="h6 notification-friend">
                          Green Goo Rock
                        </Link>{" "}
                        invited you to attend to his event Goo in{" "}
                        <Link to="/" className="notification-link">
                          Gotham Bar
                        </Link>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          March 5th at 6:43pm
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                      </svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img
                        src={process.env.PUBLIC_URL + "/img/avatar66-sm.jpg"}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        <Link to="/" className="h6 notification-friend">
                          James Summers
                        </Link>{" "}
                        commented on your new{" "}
                        <Link to="/" className="notification-link">
                          profile status
                        </Link>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          March 2nd at 8:29pm
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-heart-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-heart-icon" />
                      </svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>
                </ul>

                <Link to="/" className="view-all bg-primary">
                  View All Notifications
                </Link>
              </div>
            </div>

            <div className="tab-pane " id="search" role="tabpanel">
              <form className="search-bar w-search notification-list friend-requests">
                <div className="form-group with-button">
                  <input
                    className="form-control js-user-search"
                    placeholder="Search here people or pages..."
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user
  };
};

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
