import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-spacer header-spacer-small" />
        <div className="main-header">
          <div className="content-bg-wrap bg-landing" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-6 m-auto col-md-12 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Welcome to iderspace</h1>
                  <br />
                  <Link
                    data-scroll
                    to="profile"
                    className="btn btn-purple btn-lg"
                  >
                    Your profile page
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-bottom"
            src="/img/group-bottom.png"
            alt="friends"
          />
          <img className="img-rocket" src="/img/rocket.png" alt="rocket" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-lg-6 m-auto col-md-12 col-sm-12 col-12">
              <div className="landing-main-content" id="items">
                <Link to="/forum" className="btn btn-primary btn-lg">
                  Q/A Forum
                </Link>{" "}
                <Link to="/activity" className="btn btn-primary btn-lg">
                  Activities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
