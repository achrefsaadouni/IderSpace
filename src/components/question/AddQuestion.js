import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addQuestion } from "../../store/actions/forumActions";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class AddQuestion extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: "",
      subject: "",
      content: "",
      userId: "",
      tags: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.match.params.category_id) {
      this.setState({
        categoryId: this.props.match.params.category_id,
        userId: this.props.auth.user.userId
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { categoryId, subject, content, userId } = this.state;

    const newQuestion = {
      categoryId,
      subject,
      content,
      userId
    };

    this.props.addQuestion(newQuestion, this.props.history);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { subject, content, errors } = this.state;
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
              <div className="ui-block">
                <div className="ui-block-title bg-blue">
                  <h6 className="title c-white">Create a New Question</h6>
                </div>
                <div className="ui-block-content">
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <TextFieldGroup
                          placeholder=""
                          name="subject"
                          type="text"
                          value={subject}
                          onChange={this.onChange}
                          error={errors.subject}
                          label="Question title"
                        />
                      </div>
                      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <TextAreaFieldGroup
                          placeholder=""
                          name="content"
                          value={content}
                          onChange={this.onChange}
                          error={errors.content}
                          label="Question content"
                        />
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Choose Optional Tags"
                          />
                        </div>
                      </div>
                      <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <a
                          href="#"
                          className="btn btn-secondary btn-lg full-width"
                        >
                          Cancel
                        </a>
                      </div>
                      <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <button
                          type="submit"
                          className="btn btn-blue btn-lg full-width"
                        >
                          Post Topic
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AddQuestion.proTypes = {
  addQuestion: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  forum: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    forum: state.forum,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { addQuestion }
)(AddQuestion);
