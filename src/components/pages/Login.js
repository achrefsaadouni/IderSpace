import React, { Component } from "react";
import logo from "../../logoWhite.png";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { postLogin } from "../../store/actions/authActions";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    pwd: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submted");

    const { email, pwd } = this.state;

    // Check For Errors
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (pwd === "") {
      this.setState({ errors: { phone: "Pwd is required" } });
      return;
    }

    const auth = {
      email,
      password: pwd
    };

    this.props.postLogin(auth);

    // Clear State
    this.setState({
      name: "",
      pwd: "",
      errors: {}
    });

    this.props.history.push("/login");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, pwd } = this.state;
    return (
      <div className="landing-page">
        <div className="content-bg-wrap" />
        <div
          className="header--standard header--standard-landing"
          id="header--standard"
        >
          <div className="container">
            <div className="header--standard-wrap">
              <Link to="/" className="logo">
                <div className="img-wrap">
                  <img width={200} src={logo} alt="Olympus" />
                </div>
              </Link>
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
                <Link to="/" className="btn btn-md btn-border c-white">
                  Register Now!
                </Link>
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
                  <form onSubmit={this.onSubmit}>
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
                            value={email}
                            onChange={this.onChange}
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
                            value={pwd}
                            onChange={this.onChange}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary full-width"
                        >
                          Login
                        </button>
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

Login.propTypes = {
  postLogin: PropTypes.func.isRequired
};

export default connect(
  null,
  { postLogin }
)(Login);
