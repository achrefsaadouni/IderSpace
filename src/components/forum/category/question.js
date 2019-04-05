import React, { Component } from "react";
class question extends Component {
  render() {
    const {
      title,
      subject,
      id,
      nbrComments,
      userId,
      approuved,
      likes
    } = this.props;
    return (
      <tr>
        <td className="forum">
          <div className="forum-item">
            <img src="img/forum6.png" alt="forum" />
            <div className="content">
              <a href="#" className="h6 title">
                {title}
              </a>
              <p className="text">{subject}</p>
            </div>
          </div>
        </td>
        <td className="topics">
          {approuved ? (
            <img width="50px" src="img/aprouved.jpg" alt="aprouved" />
          ) : (
            <img width="50px" src="img/pending.png" alt="aprouved" />
          )}
        </td>
        <td className="posts">
          <a href="#" className="h6 count">
            {nbrComments}
          </a>
        </td>
        <td className="posts">
          <a href="#" className="h6 count">
            {likes}
          </a>
        </td>
        <td className="freshness">
          <div className="author-freshness">
            <div className="author-thumb">
              <img src="img/avatar40-sm.jpg" alt="author" />
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

export default question;
