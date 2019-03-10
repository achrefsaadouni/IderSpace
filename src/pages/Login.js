import React, { Component } from "react";
import logo from "../logoWhite.png";
class Login extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="content-bg-wrap" />
        <div
          className="header--standard header--standard-landing"
          id="header--standard"
        >
          <div className="container">
            <div className="header--standard-wrap">
              <a href="#" className="logo">
                <div className="img-wrap">
                  <img width={200} src={logo} alt="Olympus" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="header-spacer--standard" />
        <div className="container">
          <div className="row display-flex">
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="landing-content">
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>
                  We are the best and biggest social network with 5 billion
                  active users all around the world. Share you thoughts, write
                  blog posts, show your favourite music via Stopify, earn badges
                  and much more!
                </p>
                <a href="#" className="btn btn-md btn-border c-white">
                  Register Now!
                </a>
              </div>
            </div>

            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="registration-login-form">
                <div
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  data-mh="log-tab"
                >
                  <div className="title h6">Login to your Account</div>
                  <form className="content">
                    <div className="row">
                      <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group label-floating is-empty">
                          <label className="control-label" htmlFor="email">
                            Your Email
                          </label>
                          <input
                            className="form-control"
                            placeholder=""
                            type="email"
                            name="email"
                          />
                        </div>
                        <div className="form-group label-floating is-empty">
                          <label className="control-label" htmlFor="pwd">
                            Your Password
                          </label>
                          <input
                            className="form-control"
                            placeholder=""
                            type="password"
                            name="pwd"
                          />
                        </div>
                        <a
                          href="#"
                          className="btn btn-lg btn-primary full-width"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
