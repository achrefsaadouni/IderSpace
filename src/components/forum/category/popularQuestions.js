import React, { Component } from "react";
import PopularQuestionTopic from "./popularQuestionTopic";

class popularQuestions extends Component {
  render() {
    return (
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Popular questions</h6>
        </div>
        <div className="ui-block-content">
          {/* Widget Featured Topics */}
          <ul className="widget w-featured-topics">
            <PopularQuestionTopic
              id="id"
              title="Question node js arrow function"
              date="2 hours, 16 minutes ago"
            />
          </ul>
          {/* ... end Widget Featured Topics */}
        </div>
      </div>
    );
  }
}

export default popularQuestions;
