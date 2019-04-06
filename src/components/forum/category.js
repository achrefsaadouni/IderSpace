import React, { Component } from "react";

export default class category extends Component {
  render() {
    return (
      <tr>
        <td className="forum">
          <div className="forum-item">
            <img src="/img/forum6.png" alt="forum" />
            <div className="content">
              <a href="#" className="h6 title">
                web development
              </a>
              <p className="text">
                Talk about dinner parties, reunions and more!
              </p>
            </div>
          </div>
        </td>
        <td className="topics">
          <a href="#" className="h6 count">
            11
          </a>
        </td>
        <td className="posts">
          <a href="#" className="h6 count">
            36
          </a>
        </td>
        <td className="freshness">
          <div className="author-freshness">
            <div className="author-thumb">
              <img src="/img/avatar40-sm.jpg" alt="author" />
            </div>
            <a href="#" className="h6 title">
              Mathilda Brinker
            </a>
            <time className="entry-date updated" dateTime="2017-06-24T18:18">
              13 hours, 58 minutes ago
            </time>
          </div>
        </td>
      </tr>
    );
  }
}
