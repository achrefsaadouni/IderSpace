import React, { Component } from "react";
import Question from "./question";
import PopularQuestions from "./popularQuestions";
import RecentQuestion from "./recentQuestion";

export default class index extends Component {
  render() {
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
            src="img/group-bottom.png"
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
                    <form className="w-search">
                      <div className="form-group with-button">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search the forums..."
                        />
                        <button>
                          <svg className="olymp-magnifying-glass-icon">
                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                          </svg>
                        </button>
                      </div>
                    </form>
                    <a href="#" className="btn btn-blue btn-md">
                      Create New Question
                    </a>
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
                  <tbody>
                    <Question
                      id="id"
                      title="web development"
                      subject="Talk about dinner parties, reunions and more.."
                      nbrComments="7"
                      userId="id"
                      approuved={true}
                      likes="12"
                    />
                    <Question
                      id="id"
                      title="web development"
                      subject="Talk about dinner parties, reunions and more.."
                      nbrComments="7"
                      userId="id"
                      approuved={false}
                      likes="12"
                    />
                  </tbody>
                </table>
                {/* ... end Forums Table */}
              </div>
            </div>

            <div className="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <PopularQuestions />
              <RecentQuestion />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
