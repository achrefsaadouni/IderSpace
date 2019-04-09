import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getQuestion,
  likeQuestion,
  unlikeQuestion,
  getComments
} from "../../store/actions/forumActions";
import { getUserInfo } from "../../store/actions/authActions";
import Spinner from "../common/Spinner";
import Comment from "./Comment";
import Moment from "react-moment";
import Pagination from "react-js-pagination";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
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

  render() {
    const { question, comments, loading } = this.props.forum;

    if (comments == null || question == null || loading) return <Spinner />;

    const { createdAt, subject, content, likes } = question;

    const getComments = comments.comments.map(item => (
      <Comment
        key={item.comment._id}
        question_id={item._id}
        approuved={item.comment.approved}
        content={item.comment.content}
        user={item.comment.user}
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
                  <form className="w-search">
                    <div className="form-group with-button">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search the forums..."
                      />
                      <button>
                        <svg className="olymp-magnifying-glass-icon">
                          <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                        </svg>
                      </button>
                    </div>
                  </form>
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
                        <a href="#" className="reply-topic">
                          Reply
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="author">
                        <div className="author-thumb">
                          <img src="/img/avatar2.jpg" alt="author" />
                        </div>
                        <div className="author-content">
                          <a
                            href="02-ProfilePage.html"
                            className="h6 author-name"
                          >
                            user info
                          </a>
                          <div className="country">Long Island, NY</div>
                        </div>
                      </td>
                      <td className="posts">
                        <p>{content}</p>
                      </td>
                    </tr>
                    {getComments}
                  </tbody>
                </table>
                {/* ... end Open Topic Table */}
              </div>
              {/* Pagination */}
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
    forum: state.forum
  };
};

export default connect(
  mapStateToProps,
  { getQuestion, likeQuestion, unlikeQuestion, getComments, getUserInfo }
)(Index);
