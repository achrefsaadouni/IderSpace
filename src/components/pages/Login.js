import React, { Component } from "react";
import logo from "../../logoWhite.png";
import { Link, Redirect } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import PropTypes from "prop-types";
import { loginUser } from "../../store/actions/authActions";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pwd: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { email, pwd, errors } = this.state;

    const auth = {
      email,
      password: pwd
    };

    this.props.loginUser(auth);

    //this.props.history.push("/profile");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/profile" }
    };
    const { auth } = this.props;

    if (auth.isAuthenticated === true) {
      return <Redirect to={from} />;
    }

    const { email, pwd, errors } = this.state;
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
                <h1>
                  Welcome to your best collaborative network help plateform
                </h1>
                <p>
                  Iderspace facilitate the collaborative process by generating
                  recommendations grouping according to the task being carried
                  out, the history of the activities listed, the available
                  skills, the history of the cross evaluations of the
                  collaborators. All the data generated are analyzed by means of
                  machine tools learning to provide the best grouping process
                  and expeience.
                </p>
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
                        <br />
                        {errors.message ? (
                          <p style={{ color: "red" }}>{errors.message}</p>
                        ) : (
                          ""
                        )}
                        <br />
                        <div className="form-group label-floating is-empty">
                          <TextFieldGroup
                            placeholder=""
                            name="email"
                            type="email"
                            value={email}
                            onChange={this.onChange}
                            error={errors.email}
                            label="Your Email"
                          />
                        </div>
                        <div className="form-group label-floating is-empty">
                          <TextFieldGroup
                            placeholder=""
                            name="pwd"
                            type="password"
                            value={pwd}
                            onChange={this.onChange}
                            error={errors.password}
                            label="Your Password"
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
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
