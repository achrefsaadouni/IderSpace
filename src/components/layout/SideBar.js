import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../../store/actions/authActions";

class SideBar extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="fixed-sidebar">
          <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
            <Link to="/" className="logo">
              <div className="img-wrap">
                <img src="/img/logo.png" alt="Olympus" />
              </div>
            </Link>

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="left-menu">
                <li>
                  <Link to="/" className="js-sidebar-open">
                    <svg
                      className="olymp-menu-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="OPEN MENU"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-menu-icon" />
                    </svg>
                  </Link>
                </li>
                {/* profile link */}
                <li>
                  <Link to="/profile">
                    <svg
                      className="olymp-happy-faces-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="YOUR PROFILE"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-faces-icon" />
                    </svg>
                  </Link>
                </li>
                {/* Q/A Forum */}
                <li>
                  <Link to="/forum">
                    <svg
                      className="olymp-newsfeed-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Q/A Forum"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-newsfeed-icon" />
                    </svg>
                  </Link>
                </li>

                {this.props.auth.user.role === "admin" ? <li>
                  <Link to="/botQuestion">
                    <svg
                        className="olymp-star-icon left-menu-icon"
                        data-toggle="tooltip"
                        data-placement="right"
                        data-original-title="ChatBot Unanswered Question"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-manage-widgets-icon" />
                    </svg>
                  </Link>
                </li> : <li/>}



                 <li>
                  <Link to="/activity">
                    <svg
                      className="olymp-star-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="ACTIVITIES"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-star-icon" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-weather-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="WEATHER APP"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-weather-icon" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-calendar-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="CALENDAR AND EVENTS"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-badge-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Community Badges"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-badge-icon" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-cupcake-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Friends Birthdays"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-cupcake-icon" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-stats-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Account Stats"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-stats-icon" />
                    </svg>
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          <div
            className="fixed-sidebar-left sidebar--large"
            id="sidebar-left-1"
          >
            <Link to="/" className="logo">
              <div className="img-wrap">
                <img src="/img/logo.png" alt="Olympus" />
              </div>
              <div className="title-block">
                <h6 className="logo-title">olympus</h6>
              </div>
            </Link>

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="left-menu">
                {/* close menu */}
                <li>
                  <Link to="/" className="js-sidebar-open">
                    <svg className="olymp-close-icon left-menu-icon">
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-close-icon" />
                    </svg>
                    <span className="left-menu-title">Collapse Menu</span>
                  </Link>
                </li>
                {/* profile link */}
                <li>
                  <Link to="/profile">
                    <svg
                      className="olymp-happy-faces-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="YOUR PROFILE"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-faces-icon" />
                    </svg>
                    <span className="left-menu-title">Your Profile</span>
                  </Link>
                </li>
                {/* Q/A Forum */}
                <li>
                  <Link to="/forum">
                    <svg
                      className="olymp-newsfeed-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Q/A Forum"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-newsfeed-icon" />
                    </svg>
                    <span className="left-menu-title">Q/A Forum</span>
                  </Link>
                </li>

                {this.props.auth.user.role === "admin" ?<li>
                  <Link to="/botQuestion">
                    <svg
                        className="olymp-star-icon left-menu-icon"
                        data-toggle="tooltip"
                        data-placement="right"
                        data-original-title="ChatBot Unanswered Question"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-manage-widgets-icon" />
                    </svg>
                    <span className="left-menu-title">ChatBot Unanswered Question</span>
                  </Link>
                </li>  : <li></li>}


                  <li>
                      <Link to="/activity">
                          <svg
                              className="olymp-star-icon left-menu-icon"
                              data-toggle="tooltip"
                              data-placement="right"
                              data-original-title="Activities"
                          >
                              <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-star-icon" />
                          </svg>
                          <span className="left-menu-title">Activities</span>
                      </Link>
                  </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-weather-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="WEATHER APP"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-weather-icon" />
                    </svg>
                    <span className="left-menu-title">Weather App</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-calendar-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="CALENDAR AND EVENTS"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                    </svg>
                    <span className="left-menu-title">Calendar and Events</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-badge-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Community Badges"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-badge-icon" />
                    </svg>
                    <span className="left-menu-title">Community Badges</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-cupcake-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Friends Birthdays"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-cupcake-icon" />
                    </svg>
                    <span className="left-menu-title">Friends Birthdays</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-stats-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Account Stats"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-stats-icon" />
                    </svg>
                    <span className="left-menu-title">Account Stats</span>
                  </Link>
                </li>
              </ul>

              <div className="profile-completion">
                <div className="skills-item">
                  <div className="skills-item-info">
                    <span className="skills-item-title">
                      Profile Completion
                    </span>
                    <span className="skills-item-count">
                      <span
                        className="count-animate"
                        data-speed="1000"
                        data-refresh-interval="50"
                        data-to="76"
                        data-from="0"
                      />
                      <span className="units">76%</span>
                    </span>
                  </div>
                  <div className="skills-item-meter">
                    <span
                      className="skills-item-meter-active bg-primary"
                      style={{ width: 76 + "%" }}
                    />
                  </div>
                </div>

                <span>
                  Complete <Link to="/">your profile</Link> so people can know
                  more about you!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed-sidebar fixed-sidebar-responsive">
          <div
            className="fixed-sidebar-left sidebar--small"
            id="sidebar-left-responsive"
          >
            <Link to="/" className="logo js-sidebar-open">
              <img src="/img/logo.png" alt="Olympus" />
            </Link>
          </div>

          <div
            className="fixed-sidebar-left sidebar--large"
            id="sidebar-left-1-responsive"
          >
            <Link to="/" className="logo">
              <div className="img-wrap">
                <img src="/img/logo.png" alt="Olympus" />
              </div>
              <div className="title-block">
                <h6 className="logo-title">olympus</h6>
              </div>
            </Link>

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="control-block">
                <div className="author-page author vcard inline-items">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/author-page.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                  <Link to="/" className="author-name fn">
                    <div className="author-title">
                      James Spiegel{" "}
                      <svg className="olymp-dropdown-arrow-icon">
                        <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon" />
                      </svg>
                    </div>
                    <span className="author-subtitle">SPACE COWBOY</span>
                  </Link>
                </div>
              </div>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">MAIN SECTIONS</h6>
              </div>

              <ul className="left-menu">
                <li>
                  <Link to="/" className="js-sidebar-open">
                    <svg className="olymp-close-icon left-menu-icon">
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-close-icon" />
                    </svg>
                    <span className="left-menu-title">Collapse Menu</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-newsfeed-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="NEWSFEED"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-newsfeed-icon" />
                    </svg>
                    <span className="left-menu-title">Newsfeed</span>
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
                    <span className="left-menu-title">Fav Pages Feed</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-happy-faces-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="FRIEND GROUPS"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-faces-icon" />
                    </svg>
                    <span className="left-menu-title">Friend Groups</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-headphones-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="MUSIC&PLAYLISTS"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-headphones-icon" />
                    </svg>
                    <span className="left-menu-title">Music & Playlists</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-weather-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="WEATHER APP"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-weather-icon" />
                    </svg>
                    <span className="left-menu-title">Weather App</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-calendar-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="CALENDAR AND EVENTS"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                    </svg>
                    <span className="left-menu-title">Calendar and Events</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-badge-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Community Badges"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-badge-icon" />
                    </svg>
                    <span className="left-menu-title">Community Badges</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-cupcake-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Friends Birthdays"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-cupcake-icon" />
                    </svg>
                    <span className="left-menu-title">Friends Birthdays</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      className="olymp-stats-icon left-menu-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-original-title="Account Stats"
                    >
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-stats-icon" />
                    </svg>
                    <span className="left-menu-title">Account Stats</span>
                  </Link>
                </li>
              </ul>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">YOUR ACCOUNT</h6>
              </div>

              <ul className="account-settings">
                <li>
                  <Link to="/">
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
                  <Link to="/">
                    <svg className="olymp-logout-icon">
                      <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-logout-icon" />
                    </svg>

                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">About Olympus</h6>
              </div>

              <ul className="about-olympus">
                <li>
                  <Link to="/">
                    <span>Terms and Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>FAQs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Careers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(SideBar);

