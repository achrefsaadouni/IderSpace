import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getQuestion,
  likeQuestion,
  unlikeQuestion,
  getComments,
  deleteQuestion,
  addComment,
  bestComment
} from "../../store/actions/forumActions";
import { getUserInfo } from "../../store/actions/authActions";
import Spinner from "../common/Spinner";
import Comment from "./Comment";
import Moment from "react-moment";
import Pagination from "react-js-pagination";
import axios from "axios";
import { Link } from "react-router-dom";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import classnames from "classnames";
import "./tag.css";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      user: {},
      comment: "",
      errors: {},
      liked: true
    };
  }

  componentDidMount() {
    if (this.props.match.params.question_id) {
      this.props.getComments(this.props.match.params.question_id, 3, 1);
      this.props.getQuestion(this.props.match.params.question_id);
    }
  }

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
    this.props.getComments(this.props.match.params.question_id, 3, pageNumber);
  };

  deleteQuestion = () => {
    const { question } = this.props.forum;
    this.props.deleteQuestion(
      question._id,
      this.props.history,
      this.props.match.params.category_id
    );
  };

  onLikeClick() {
    this.props.likeQuestion(this.props.match.params.question_id);
  }

  onUnlikeClick() {
    this.props.unlikeQuestion(this.props.match.params.question_id);
  }

  findUserLike() {
    const { question } = this.props.forum;
    const { likes } = question;

    if (likes.filter(like => like.user === this.props.user.userId).length > 0) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }

  onSubmitComment = e => {
    e.preventDefault();

    const { comment } = this.state;

    const newComment = {
      content: comment,
      name: "comment"
    };

    this.props.addComment(this.props.match.params.question_id, newComment);
    this.setState({ comment: "" })
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { question, comments, loading } = this.props.forum;

    if (comments == null || question == null || loading) return <Spinner />;

    const { createdAt, subject, content, likes, author } = question;
    const { comment, errors, liked } = this.state;

    axios
      .get(
        `/api/user/some-info/${
          this.props.forum.question.author
        }`
      )
      .then(res => {
        this.setState({ user: res.data });
      });

    const getComments = comments.comments.map(item => (
      <Comment
        key={item.comment._id}
        owner={this.state.user._id}
        question_id={item._id}
        approuved={item.comment.approved}
        content={item.comment.content}
        user_id={item.comment.user}
        date={item.comment.date}
        id={item.comment._id}
      />
    ));

    return (
      <React.Fragment>
        <div className="header-spacer header-spacer-small" />
        <div className="main-header">
          <div className="content-bg-wrap bg-group" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Welcome to the Q&A Forums!</h1>
                  <p>
                    Here in the forums you’ll be able to easily create and
                    manage question and answers to share with the community! The
                    forum offer questions and answers on a wide range of themes
                    concerning computer programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-bottom"
            src={process.env.PUBLIC_URL + "/img/group-bottom.png"}
            alt="friends"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                <div className="ui-block-title">
                  <div className="h6 title">{subject}</div>
                  <span>
                    <button
                      onClick={this.onLikeClick.bind(this)}
                      type="button"
                      className="btn btn-light mr-1"
                    >
                      <i
                        className={classnames("fas fa-thumbs-up", {
                          "text-red": this.findUserLike()
                        })}
                      />
                      <span
                        className={classnames("badge badge-light", {
                          "text-red": this.findUserLike()
                        })}
                      >
                        {likes.length}
                      </span>
                    </button>
                    <button
                      onClick={this.onUnlikeClick.bind(this)}
                      type="button"
                      className="btn btn-light mr-1"
                    >
                      <i
                        className="fas fa-thumbs-down"
                      />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                {/* Open Topic Table */}
                <table className="open-topic-table">
                  <thead>
                    <tr>
                      <th className="author">Author</th>
                      <th className="posts">Question</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="topic-date" colSpan={2}>
                        <Moment format="dddd MM, YYYY \at HH:mm">
                          {createdAt}
                        </Moment>
                        <Link to="#" className="reply-topic">
                          <i
                            style={{ margin: "0 8px" }}
                            className="far fa-comments"
                          />
                        </Link>
                        {this.props.user.userId === author ? (
                        <Link
                          to={
                            "/forum/" +
                            this.props.match.params.category_id +
                            "/edit-question/" +
                            this.props.match.params.question_id
                          }
                          className="reply-topic"
                        >
                          <i
                            style={{ margin: "0 8px" }}
                            className="far fa-edit"
                          />
                        </Link> ) : ""}
                        {this.props.user.userId === author ? (
                          
                          <Link
                            to="#"
                            onClick={this.deleteQuestion}
                            className="reply-topic"
                          >
                            <i
                              style={{ margin: "0 8px" }}
                              className="fas fa-trash-alt"
                            />
                          </Link>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="author">
                        <div className="author-thumb">
                          <img
                            alt={this.state.user.username}
                            src={this.state.user.profileImage}
                            className="avatar"
                          />
                        </div>
                        <div className="author-content">
                          <a
                            href="02-ProfilePage.html"
                            className="h6 author-name"
                          >
                            {this.state.user.username
                              ? this.state.user.username
                              : "undefined"}
                          </a>
                        </div>
                      </td>
                      <td className="posts">
                        <p>{content}</p>
                      </td>
                    </tr>
                    {getComments}
                  </tbody>
                </table>
                <form onSubmit={this.onSubmitComment}>
                  <div className="row">
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <TextAreaFieldGroup
                        placeholder=""
                        name="comment"
                        value={comment}
                        onChange={this.onChange}
                        error={errors.comment}
                        label="comment content"
                      />
                    </div>
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <button
                        type="submit"
                        className="btn btn-blue btn-lg full-width"
                      >
                        Post comment
                      </button>
                    </div>
                  </div>
                </form>
                {/* ... end Open Topic Table */}
              </div>
              {/* Pagination */}
              {comments.max > 3 ? (
                <nav aria-label="Page navigation">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={3}
                    totalItemsCount={comments.max}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass="pagination justify-content-center"
                    activeClass="page-item"
                    activeLinkClass="page-link active"
                    linkClass="page-link"
                    prevPageText="Previous"
                    nextPageText="Next"
                    disabledClass="page-item disabled"
                    hideFirstLastPages
                  />
                </nav>
              ) : (
                ""
              )}

              {/* ... end Pagination */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  forum: PropTypes.object.isRequired,
  getQuestion: PropTypes.func.isRequired,
  likeQuestion: PropTypes.func.isRequired,
  unlikeQuestion: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    forum: state.forum,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  {
    getQuestion,
    likeQuestion,
    unlikeQuestion,
    getComments,
    getUserInfo,
    deleteQuestion,
    addComment,
    bestComment
  }
)(Index);
