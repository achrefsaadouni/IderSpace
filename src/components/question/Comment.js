import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";

class Comment extends Component {
  render() {
    const { question_id, approuved, content, user, date, id } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td className="topic-date" colSpan={2}>
            <Moment format="dddd MM, YYYY \at HH:mm">{date}</Moment>
          </td>
        </tr>
        <tr>
          <td className="author">
            <div className="author-thumb">
              <img src="/img/avatar3.jpg" alt="author" />
            </div>
            <div className="author-content">
              <a href="02-ProfilePage.html" className="h6 author-name">
                user
              </a>
            </div>
          </td>
          <td className="posts">
            <p>{content}</p>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

Comment.propTypes = {};

export default connect()(Comment);
