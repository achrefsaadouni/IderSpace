import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserInfo } from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import axios from "axios";
class question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }

  componentWillMount() {
    this.props.getUserInfo(this.props.userId);
  }
  componentDidMount() {
    //get comment author
    axios
        .get(`https://iderspace.herokuapp.com/api/user/some-info/${this.props.userId}`)
        .then(res => {
          this.setState({ userInfo: res.data });
        });
  }

  render() {
    const {
      title,
      content,
      id,
      nbrComments,
      approuved,
      likes,
      category_id
    } = this.props;
    return (
      <tr>
        <td className="forum">
          <div className="forum-item">
            <img src="/img/forum6.png" alt="forum" />
            <div className="content">
              <Link
                to={"/forum/" + category_id + "/question/" + id}
                className="h6 title"
              >
                {title}
              </Link>
              <p className="text">
                {content.length > 30 ? content.substring(0, 30) : content}
              </p>
            </div>
          </div>
        </td>
        <td className="topics">
          {approuved ? (
            <img width="50px" src="/img/aprouved.jpg" alt="aprouved" />
          ) : (
            <img width="50px" src="/img/pending.png" alt="aprouved" />
          )}
        </td>
        <td className="posts">
          <a href="#" className="h6 count">
            {nbrComments}
          </a>
        </td>
        <td className="posts">
          <a href="#" className="h6 count">
            {likes}
          </a>
        </td>
        <td className="freshness">
          <div className="author-freshness">
            <div className="author-thumb">
              <img
                  alt={this.state.userInfo.username}
                  src={this.state.userInfo.profileImage}
                  className="avatar"
              />
            </div>
            <a href="#" className="h6 title">
              {this.state.userInfo.username}
            </a>
            {/*<time className="entry-date updated" dateTime="2017-06-24T18:18">
              set time here
            </time> */}
          </div>
        </td>
      </tr>
    );
  }
}

question.proTypes = {
  getUserInfo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { getUserInfo }
)(question);
