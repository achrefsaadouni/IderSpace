import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class searchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }

  componentDidMount() {
    //get comment author
    axios.get(`/api/user/some-info/${this.props.user}`).then(res => {
      this.setState({ userInfo: res.data });
    });
  }

  render() {
    const { user, subject, category_id, id, content, approuved } = this.props;
    return (
      <div className="ui-block">
        <div className="birthday-item inline-items badges">
          <div className="author-thumb" style={{ marginLeft: 50 }}>
            {approuved ? (
              <img width="50px" src="/img/aprouved.jpg" alt="aprouved" />
            ) : (
              <img width="50px" src="/img/pending.png" alt="aprouved" />
            )}
          </div>
          <div className="birthday-author-name">
            <Link
              to={"/forum/" + category_id + "/question/" + id}
              className="h6 author-name"
            >
              {subject}
            </Link>
            <div className="birthday-date">
              {content.length > 60 ? content.substring(0, 160) : content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
