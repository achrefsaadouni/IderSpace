import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar_Right extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="fixed-sidebar right">
          <div
            className="fixed-sidebar-right sidebar--small"
            id="sidebar-right"
          >
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar67-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar62-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar68-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar69-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status away" />
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar70-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status disconected" />
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar64-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar71-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar72-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status away" />
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar63-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status status-invisible" />
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar72-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status away" />
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar71-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="search-friend inline-items">
              <Link to="/" className="js-sidebar-open">
                <svg className="olymp-menu-icon">
                  <use xlinkto="/svg-icons/sprites/icons.svg#olymp-menu-icon" />
                </svg>
              </Link>
            </div>

            <Link to="/" className="olympus-chat inline-items js-chat-open">
              <svg className="olymp-chat---messages-icon">
                <use xlinkto="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
              </svg>
            </Link>
          </div>

          <div
            className="fixed-sidebar-right sidebar--large"
            id="sidebar-right-1"
          >
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <Link to="/" className="title">
                  Close Friends
                </Link>
                <Link to="/">Settings</Link>
              </div>

              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar67-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Carol Summers
                    </Link>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar62-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Mathilda Brinker
                    </Link>
                    <span className="status">AT WORK!</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar68-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Carol Summers
                    </Link>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar69-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status away" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Michael Maximoff
                    </Link>
                    <span className="status">AWAY</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar70-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status disconected" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Rachel Howlett
                    </Link>
                    <span className="status">OFFLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="ui-block-title ui-block-title-small">
                <Link to="/" className="title">
                  MY FAMILY
                </Link>
                <Link to="/">Settings</Link>
              </div>

              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar64-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Sarah Hetfield
                    </Link>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="ui-block-title ui-block-title-small">
                <Link to="/" className="title">
                  UNCATEGORIZED
                </Link>
                <Link to="/">Settings</Link>
              </div>

              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar71-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Bruce Peterson
                    </Link>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar72-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status away" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Chris Greyson
                    </Link>
                    <span className="status">AWAY</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar63-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status status-invisible" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Nicholas Grisom
                    </Link>
                    <span className="status">INVISIBLE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar72-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status away" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Chris Greyson
                    </Link>
                    <span className="status">AWAY</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src="/img/avatar71-sm.jpg"
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>

                  <div className="author-status">
                    <Link to="/" className="h6 author-name">
                      Bruce Peterson
                    </Link>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>

                    <ul className="more-icons">
                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>

                      <li>
                        <svg
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkto="/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="search-friend inline-items">
              <form className="form-group">
                <input
                  className="form-control"
                  placeholder="Search Friends..."
                  value=""
                  type="text"
                />
              </form>

              <Link
                to="29-YourAccount-AccountSettings.html"
                className="settings"
              >
                <svg className="olymp-settings-icon">
                  <use xlinkto="/svg-icons/sprites/icons.svg#olymp-settings-icon" />
                </svg>
              </Link>

              <Link to="/" className="js-sidebar-open">
                <svg className="olymp-close-icon">
                  <use xlinkto="/svg-icons/sprites/icons.svg#olymp-close-icon" />
                </svg>
              </Link>
            </div>

            <Link to="/" className="olympus-chat inline-items js-chat-open">
              <h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
              <svg className="olymp-chat---messages-icon">
                <use xlinkto="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="fixed-sidebar right fixed-sidebar-responsive">
          <div
            className="fixed-sidebar-right sidebar--small"
            id="sidebar-right-responsive"
          >
            <Link to="/" className="olympus-chat inline-items js-chat-open">
              <svg className="olymp-chat---messages-icon">
                <use xlinkto="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="ui-block popup-chat popup-chat-responsive"
          tabindex="-1"
          role="dialog"
          aria-labelledby="update-header-photo"
          aria-hidden="true"
        >
          <div className="modal-content">
            <div className="modal-header">
              <span className="icon-status online" />
              <h6 className="title">Chat</h6>
              <div className="more">
                <svg className="olymp-three-dots-icon">
                  <use xlinkto="/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                </svg>
                <svg className="olymp-little-delete js-chat-open">
                  <use xlinkto="/svg-icons/sprites/icons.svg#olymp-little-delete" />
                </svg>
              </div>
            </div>
            <div className="modal-body">
              <div className="mCustomScrollbar">
                <ul className="notification-list chat-message chat-message-field">
                  <li>
                    <div className="author-thumb">
                      <img
                        src="/img/avatar14-sm.jpg"
                        alt="author"
                        className="mCS_img_loaded"
                      />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow!
                        I’m gonna be handling the gifts and Jake’s gonna get the
                        drinks
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 8:10pm
                        </time>
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img
                        src="/img/author-page.jpg"
                        alt="author"
                        className="mCS_img_loaded"
                      />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Don’t worry Mathilda!
                      </span>
                      <span className="chat-message-item">
                        I already bought everything
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 8:29pm
                        </time>
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img
                        src="/img/avatar14-sm.jpg"
                        alt="author"
                        className="mCS_img_loaded"
                      />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow!
                        I’m gonna be handling the gifts and Jake’s gonna get the
                        drinks
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 8:10pm
                        </time>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <form className="need-validation">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">
                    Press enter to post...
                  </label>
                  <textarea className="form-control" placeholder="" />
                  <div className="add-options-message">
                    <Link to="/" className="options-message">
                      <svg className="olymp-computer-icon">
                        <use xlinkto="/svg-icons/sprites/icons.svg#olymp-computer-icon" />
                      </svg>
                    </Link>
                    <div className="options-message smile-block">
                      <svg className="olymp-happy-sticker-icon">
                        <use xlinkto="/svg-icons/sprites/icons.svg#olymp-happy-sticker-icon" />
                      </svg>

                      <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat1.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat2.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat3.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat4.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat5.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat6.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat7.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat8.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat9.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat10.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat11.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat12.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat13.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat14.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat15.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat16.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat17.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat18.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat19.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat20.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat21.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat22.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat23.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat24.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat25.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat26.png" alt="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img src="/img/icon-chat27.png" alt="icon" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar_Right;
