import React, { Component } from "react";
import RecentQuestionTopic from "./recentQuestionTopic";
import { connect } from "react-redux";

class recentQuestion extends Component {
  render() {
    const { lastQuestions } = this.props.forum;
    const { category_id } = this.props;

    const Questions = lastQuestions.map(item => (
      <RecentQuestionTopic
        key={item._id}
        id={item._id}
        title={item.subject}
        date={item.createdAt}
        category_id={category_id}
      />
    ));

    return (
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Recent questions</h6>
        </div>
        <div className="ui-block-content">
          {/* Widget Recent Topics */}
          <ul className="widget w-featured-topics">{Questions}</ul>
          {/* ... end Widget Recent Topics */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    forum: state.forum
  };
};

export default connect(
  mapStateToProps,
  null
)(recentQuestion);
