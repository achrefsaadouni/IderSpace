import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteComment } from "../../store/actions/forumActions";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }

  deleteComment = () => {
    this.props.deleteComment(this.props.question_id, this.props.id);
  };

  componentDidMount() {
    //get comment author
    axios
      .get(`http://localhost:2500/api/user/some-info/${this.props.user}`)
      .then(res => {
        this.setState({ userInfo: res.data });
      });
  }
  render() {
    const { question_id, approuved, content, date, id, user } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td className="topic-date" colSpan={2}>
            <Moment format="dddd MM, YYYY \at HH:mm">{date}</Moment>
            {this.props.user.userId === user.userId ? (
              <span onClick={this.deleteComment} className="reply-topic">
                <i
                  style={{ margin: "0 8px", cursor: "pointer" }}
                  className="fas fa-trash-alt"
                />
              </span>
            ) : (
              ""
            )}
          </td>
        </tr>
        <tr>
          <td className="author">
            <div className="author-thumb">
              <img
                alt={user.username}
                src={user.profileImage}
                className="avatar"
              />
            </div>
            <div className="author-content">
              <a href="02-ProfilePage.html" className="h6 author-name">
                {user.username}
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

Comment.propTypes = {
  user: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { deleteComment }
)(Comment);
