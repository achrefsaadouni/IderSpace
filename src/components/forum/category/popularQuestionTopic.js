import React, { Component } from "react";

class popularQuestionTopic extends Component {
  render() {
    const { title, date } = this.props;
    return (
      <li>
        <i className="icon fa fa-star" aria-hidden="true" />
        <div className="content">
          <a href="/" className="h6 title">
            {title}
          </a>
          <time className="entry-date updated" dateTime="2017-06-24T18:18">
            {date}
          </time>
        </div>
      </li>
    );
  }
}

export default popularQuestionTopic;
