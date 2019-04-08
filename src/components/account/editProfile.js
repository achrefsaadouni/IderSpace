import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profileActions";
import Spinner from "../common/Spinner";
import isEmpty from "../../validation/is-empty";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      class: "",
      email: "",
      firstname: "",
      lastname: "",
      linkedin: "",
      github: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesnt exist, make empty string
      profile.username = !isEmpty(profile.username) ? profile.username : "";
      profile.class = !isEmpty(profile.class) ? profile.class : "";
      profile.email = !isEmpty(profile.email) ? profile.email : "";
      profile.firstname = !isEmpty(profile.firstname) ? profile.firstname : "";
      profile.lastname = !isEmpty(profile.lastname) ? profile.lastname : "";
      profile.linkedin = !isEmpty(profile.linkedin) ? profile.linkedin : {};
      profile.github = !isEmpty(profile.github) ? profile.github : "";

      // Set component fields state
      this.setState({
        username: profile.username,
        class: profile.class,
        email: profile.email,
        firstname: profile.firstname,
        lastname: profile.lastname,
        linkedin: profile.linkedin,
        github: profile.github
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { email, firstname, lastname, linkedin, github } = this.state;

    // Updated Profile
    const updProfile = {
      id: "id",
      email,
      firstname,
      lastname,
      linkedin,
      github,
      class: this.state.class
    };

    /* this.props.history.push("/profile"); */
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, firstname, lastname, linkedin, github } = this.state;
    const { profile, loading } = this.props.profile;

    if (profile === null || loading) {
      return <Spinner />;
    }

    return (
      <React.Fragment>
        {/* ... end Responsive Header-BP */}
        <div className="header-spacer header-spacer-small" />
        {/* Main Header Account */}
        <div className="main-header">
          <div className="content-bg-wrap bg-account" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Your Account Dashboard</h1>
                  <p>
                    Welcome to your account dashboard! Here you’ll find
                    everything you need to change your profile information,
                    settings, read notifications and requests, view your latest
                    messages, change your pasword and much more! Also you can
                    create or manage your own favourite page, have fun!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-bottom"
            src="/img/account-bottom.png"
            alt="friends"
          />
        </div>
        {/* ... end Main Header Account */}
        <div className="container">
          <div className="row">
            <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Personal Information</h6>
                </div>
                <div className="ui-block-content">
                  {/* Personal Information Form  */}
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="form-group label-floating">
                          <label className="control-label" htmlFor="firstname">
                            First Name
                          </label>
                          <input
                            name="firstname"
                            className="form-control"
                            type="text"
                            onChange={this.onChange}
                            value={firstname}
                          />
                        </div>
                        <div className="form-group label-floating">
                          <label className="control-label" htmlFor="email">
                            Your Email
                          </label>
                          <input
                            name="email"
                            className="form-control"
                            type="email"
                            onChange={this.onChange}
                            value={email}
                          />
                        </div>
                        <div className="form-group date-time-picker label-floating">
                          <label className="control-label">Your Birthday</label>
                          <input name="dateTimepicker" value="10/24/1984" />
                          <span className="input-group-addon">
                            <svg className="olymp-month-calendar-icon icon">
                              <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-month-calendar-icon" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="form-group label-floating">
                          <label className="control-label" htmlFor="lastname">
                            Last Name
                          </label>
                          <input
                            name="lastname"
                            className="form-control"
                            type="text"
                            value={lastname}
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group label-floating">
                          <label className="control-label" htmlFor="class">
                            Your class
                          </label>
                          <input
                            name="class"
                            className="form-control"
                            type="text"
                            ref={this.classInput}
                            value={this.state.class}
                          />
                        </div>
                        <div className="form-group label-floating">
                          <label className="control-label">
                            Your Phone Number
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value="21-123-123"
                          />
                        </div>
                      </div>
                      <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="form-group label-floating is-select">
                          <label className="control-label">Your Country</label>
                          <select className="selectpicker form-control">
                            <option value="TN">Tunisia</option>
                            <option value="AU">Australia</option>
                          </select>
                        </div>
                      </div>
                      <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="form-group label-floating is-select">
                          <label className="control-label">
                            Your State / Province
                          </label>
                          <select className="selectpicker form-control">
                            <option value="TNn">Tunis</option>
                            <option value="TE">Texas</option>
                          </select>
                        </div>
                      </div>
                      <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="form-group label-floating is-select">
                          <label className="control-label">Your City</label>
                          <select className="selectpicker form-control">
                            <option value="M2">ManarII</option>
                            <option value="NY">New York</option>
                          </select>
                        </div>
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="form-group label-floating">
                          <label className="control-label">
                            Write a little description about you
                          </label>
                          <textarea
                            className="form-control"
                            value={
                              "Hi, I’m malik, I’m 24 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56"
                            }
                          />
                        </div>
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="form-group label-floating">
                          <label className="control-label" htmlFor="birth">
                            Your Birthplace
                          </label>
                          <input
                            name="birth"
                            className="form-control"
                            type="text"
                            value="Tunis"
                          />
                        </div>
                        <div className="form-group label-floating">
                          <label className="control-label">Your Gender</label>
                          <select className="selectpicker form-control">
                            <option value="MA">Male</option>
                            <option value="FE">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group with-icon label-floating">
                          <label className="control-label" htmlFor="linkedin">
                            Your Linkedin Account
                          </label>
                          <input
                            name="linkedin"
                            className="form-control"
                            type="text"
                            onChange={this.onChange}
                            value={linkedin}
                          />
                          <i
                            className="fab fa-linkedin c-linkedin"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="form-group with-icon label-floating">
                          <label className="control-label" htmlFor="github">
                            Your Github Account
                          </label>
                          <input
                            name="github"
                            className="form-control"
                            type="text"
                            onChange={this.onChange}
                            value={github}
                          />
                          <i
                            className="fab fa-github c-github"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <button className="btn btn-secondary btn-lg full-width">
                          Restore all Attributes
                        </button>
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg full-width"
                        >
                          Save all Changes
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* ... end Personal Information Form  */}
                </div>
              </div>
            </div>
            <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12  responsive-display-none">
              <div className="ui-block">
                {/* Your Profile  */}
                <div className="your-profile">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Your PROFILE</h6>
                  </div>
                  <div
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne">
                        <h6 className="mb-0">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Profile Settings
                            <svg className="olymp-dropdown-arrow-icon">
                              <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon" />
                            </svg>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <ul className="your-profile-menu">
                          <li>
                            <a href="28-YourAccount-PersonalInformation.html">
                              Personal Information
                            </a>
                          </li>
                          <li>
                            <a href="29-YourAccount-AccountSettings.html">
                              Account Settings
                            </a>
                          </li>
                          <li>
                            <a href="30-YourAccount-ChangePassword.html">
                              Change Password
                            </a>
                          </li>
                          <li>
                            <a href="31-YourAccount-HobbiesAndInterests.html">
                              Hobbies and Interests
                            </a>
                          </li>
                          <li>
                            <a href="32-YourAccount-EducationAndEmployement.html">
                              Education and Employement
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ui-block-title">
                    <a
                      href="33-YourAccount-Notifications.html"
                      className="h6 title"
                    >
                      Notifications
                    </a>
                    <a href="#" className="items-round-little bg-primary">
                      8
                    </a>
                  </div>
                  <div className="ui-block-title">
                    <a
                      href="34-YourAccount-ChatMessages.html"
                      className="h6 title"
                    >
                      Chat / Messages
                    </a>
                  </div>
                  <div className="ui-block-title">
                    <a
                      href="35-YourAccount-FriendsRequests.html"
                      className="h6 title"
                    >
                      Friend Requests
                    </a>
                    <a href="#" className="items-round-little bg-blue">
                      4
                    </a>
                  </div>
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">FAVOURITE PAGE</h6>
                  </div>
                  <div className="ui-block-title">
                    <a
                      href="36-FavPage-SettingsAndCreatePopup.html"
                      className="h6 title"
                    >
                      Create Fav Page
                    </a>
                  </div>
                  <div className="ui-block-title">
                    <a
                      href="36-FavPage-SettingsAndCreatePopup.html"
                      className="h6 title"
                    >
                      Fav Page Settings
                    </a>
                  </div>
                </div>
                {/* ... end Your Profile  */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    profile: state.profile,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(EditProfile);
