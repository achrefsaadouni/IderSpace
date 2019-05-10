import React, { Component } from "react";
import Question from "./question";
import PopularQuestions from "./popularQuestions";
import RecentQuestion from "./recentQuestion";
import {
  getQuestions,
  getLast3Questions
} from "../../store/actions/forumActions";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./../question/search";

class index extends Component {
  componentDidMount() {
    if (this.props.match.params.category_id) {
      this.props.getQuestions(this.props.match.params.category_id, 5, 1);
    }
    this.props.getLast3Questions();
  }

  render() {
    const { questions, lastQuestions, loading } = this.props.forum;

    if (questions === null || lastQuestions === null || loading) {
      return <Spinner />;
    }
    const isAprouved = comments => {
      const a = comments.filter(c => c.approved === true);
      if (a.length > 0) return true;
      return false;
    };
    const allQuestions = questions.questions.map(item => (
      <Question
        key={item._id}
        category_id={this.props.match.params.category_id}
        id={item._id}
        title={item.subject}
        content={item.content}
        nbrComments={item.comments.length}
        userId={item.author}
        approuved={isAprouved(item.comments)}
        likes={item.likes.length}
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
                    manage categories and topics to share with the community! We
                    included some of the most used topics, like music, comics,
                    movies, and community, each one with a cool and customizable
                    illustration so you can have fun with them!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-bottom"
            src="/img/group-bottom.png"
            alt="friends"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                <div className="ui-block-title">
                  <div className="h6 title">Q/A Forums</div>
                  <div className="align-right">
                    <Search />
                    <Link
                      to={
                        "/forum/" +
                        this.props.match.params.category_id +
                        "/add-question"
                      }
                      className="btn btn-blue btn-md"
                    >
                      Create New Question
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Forums Table */}
                <table className="forums-table">
                  <thead>
                    <tr>
                      <th className="forum">Forum</th>
                      <th className="topics">Approuved</th>
                      <th className="posts">Comments</th>
                      <th className="posts">Votes</th>
                      <th className="freshness">Freshness</th>
                    </tr>
                  </thead>
                  <tbody>{allQuestions}</tbody>
                </table>
                {/* ... end Forums Table */}
              </div>
            </div>

            <div className="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <RecentQuestion
                category_id={this.props.match.params.category_id}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    forum: state.forum
  };
};

export default connect(
  mapStateToProps,
  { getQuestions, getLast3Questions }
)(index);
