import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import axios from "axios";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    //get comment author
    axios
      .get(`http://localhost:2500/api/user/some-info/${this.props.user}`)
      .then(res => {
        this.setState({ user: res.data });
      });
  }
  render() {
    const { question_id, approuved, content, date, id } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td className="topic-date" colSpan={2}>
            <Moment format="dddd MM, YYYY \at HH:mm">{date}</Moment>
          </td>
        </tr>
        <tr>
          <td className="author">
            <div className="author-thumb">
              <img src="/img/avatar3.jpg" alt="author" />
            </div>
            <div className="author-content">
              <a href="02-ProfilePage.html" className="h6 author-name">
                {this.state.user.username}
              </a>
            </div>
          </td>
          <td className="posts">
            <p>{content}</p>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

Comment.propTypes = {};

export default connect()(Comment);
