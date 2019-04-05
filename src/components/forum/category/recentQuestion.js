import React, { Component } from "react";
import RecentQuestionTopic from "./recentQuestionTopic";

class recentQuestion extends Component {
  render() {
    return (
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Recent questions</h6>
        </div>
        <div className="ui-block-content">
          {/* Widget Recent Topics */}
          <ul className="widget w-featured-topics">
            <RecentQuestionTopic
              id="id"
              title="Question node js arrow function"
              date="2 hours, 16 minutes ago"
            />
          </ul>
          {/* ... end Widget Recent Topics */}
        </div>
      </div>
    );
  }
}

export default recentQuestion;
