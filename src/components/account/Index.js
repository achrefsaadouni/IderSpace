import React, { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-spacer" />
        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="top-header">
                  <div className="top-header-thumb">
                    <img src="/img/top-header1.jpg" alt="nature" />
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
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
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
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                        </svg>
                      </Link>

                      <Link to="/" className="btn btn-control bg-purple">
                        <svg className="olymp-chat---messages-icon">
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                        </svg>
                      </Link>

                      <div className="btn btn-control bg-primary more">
                        <svg className="olymp-settings-icon">
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-settings-icon" />
                        </svg>

                        <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                          <li>
                            <Link
                              to="/"
                              data-toggle="modal"
                              data-target="#update-header-photo"
                            >
                              Update Profile Photo
                            </Link>
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
                      <img src="/img/author-main1.jpg" alt="author" />
                    </Link>
                    <div className="author-content">
                      <Link to="02-ProfilePage.html" className="h4 author-name">
                        James Spiegel
                      </Link>
                      <div className="country">San Francisco, CA</div>
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
                      <img src="/img/author-page.jpg" alt="author" />

                      <div className="author-date">
                        <Link
                          className="h6 post__author-name fn"
                          to="02-ProfilePage.html"
                        >
                          James Spiegel
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
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
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
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-heart-icon" />
                        </svg>
                        <span>8</span>
                      </Link>

                      <ul className="friends-harmonic">
                        <li>
                          <Link to="/">
                            <img src="/img/friend-harmonic7.jpg" alt="friend" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/friend-harmonic8.jpg" alt="friend" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/friend-harmonic9.jpg" alt="friend" />
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
                        <br />6 more liked this
                      </div>

                      <div className="comments-shared">
                        <Link to="/" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon" />
                          </svg>
                          <span>17</span>
                        </Link>

                        <Link to="/" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-share-icon" />
                          </svg>
                          <span>24</span>
                        </Link>
                      </div>
                    </div>

                    <div className="control-block-button post-control-button">
                      <Link to="/" className="btn btn-control featured-post">
                        <svg className="olymp-trophy-icon">
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-trophy-icon" />
                        </svg>
                      </Link>

                      <Link to="/" className="btn btn-control">
                        <svg className="olymp-like-post-icon">
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-like-post-icon" />
                        </svg>
                      </Link>

                      <Link to="/" className="btn btn-control">
                        <svg className="olymp-comments-post-icon">
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </Link>

                      <Link to="/" className="btn btn-control">
                        <svg className="olymp-share-icon">
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-share-icon" />
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
                      <span className="text">
                        Hi, I’m James, I’m 36 and I work as a Digital Designer
                        for the “Daydreams” Agency in Pier 56.
                      </span>
                    </li>
                    <li>
                      <span className="title">Favourite TV Shows:</span>
                      <span className="text">
                        Breaking Good, RedDevil, People of Interest, The Running
                        Dead, Found, American Guy.
                      </span>
                    </li>
                    <li>
                      <span className="title">
                        Favourite Music Bands / Artists:
                      </span>
                      <span className="text">
                        Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters,
                        System of a Revenge.
                      </span>
                    </li>
                  </ul>

                  <div className="widget w-socials">
                    <h6 className="title">Other Social Networks:</h6>
                    <Link to="/" className="social-item bg-facebook">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      Facebook
                    </Link>
                    <Link to="/" className="social-item bg-twitter">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      Twitter
                    </Link>
                    <Link to="/" className="social-item bg-dribbble">
                      <i className="fab fa-dribbble" aria-hidden="true" />
                      Dribbble
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Friends (86)</h6>
                </div>
                <div className="ui-block-content">
                  <ul className="widget w-faved-page js-zoom-gallery">
                    <li>
                      <Link to="/">
                        <img src="/img/avatar38-sm.jpg" alt="author" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar24-sm.jpg" alt="user" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar36-sm.jpg" alt="author" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar35-sm.jpg" alt="user" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar34-sm.jpg" alt="author" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar33-sm.jpg" alt="author" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar32-sm.jpg" alt="user" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar31-sm.jpg" alt="author" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar30-sm.jpg" alt="author" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar29-sm.jpg" alt="user" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar28-sm.jpg" alt="user" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar27-sm.jpg" alt="user" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar26-sm.jpg" alt="user" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/img/avatar25-sm.jpg" alt="user" />
                      </Link>
                    </li>
                    <li className="all-users">
                      <Link to="/">+74</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
