import React, { Component } from "react";

class recentQuestionTopic extends Component {
  render() {
    const { title, date, id } = this.props;
    return (
      <li>
        <div className="content">
          <a href="#" className="h6 title forums">
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

export default recentQuestionTopic;
