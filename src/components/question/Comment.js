import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteComment, bestComment } from "../../store/actions/forumActions";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }

  setBest= () => {

    const { question_id, id } = this.props;
    this.props.bestComment(question_id,id);

  }

  deleteComment = () => {
    this.props.deleteComment(this.props.question_id, this.props.id);
  };

  componentDidMount() {
    //get comment author
    axios
      .get(`/api/user/some-info/${this.props.user_id}`)
      .then(res => {
        this.setState({ userInfo: res.data });
      });
  }
  render() {
    const { question_id, approuved, content, date, id, user_id, owner, user } = this.props;
    return (
      <React.Fragment>
        <tr>
        <tr>
        </tr>
          <td className="topic-date" colSpan={2} style={approuved ? { color:"green", border:"solid 2px green" } : {}} >
            <Moment format="dddd MM, YYYY \at HH:mm">{date}</Moment>
            {approuved ? (
            <span className="reply-topic">
              Best answer
            </span>
          ) : ""}
            {this.props.user.userId === user_id ? (
              <span onClick={this.deleteComment} className="reply-topic">
                <i
                  style={{ margin: "0 8px", cursor: "pointer" }}
                  className="fas fa-trash-alt"
                />
              </span>
            ) : (
              ""
            )}

            {this.props.user.userId === owner ? (
              <span onClick={this.setBest} className="reply-topic">
                <i
                  style={{ margin: "0 8px", cursor: "pointer" }}
                  className="fas fa-anchor"
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
                src={this.state.userInfo.profileImage}
                className="avatar"
              />
            </div>
            <div className="author-content">
              <a href="02-ProfilePage.html" className="h6 author-name">
                {this.state.userInfo.username}
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
  { deleteComment, bestComment }
)(Comment);
