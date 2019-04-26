import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class recentQuestionTopic extends Component {
  render() {
    const { title, date, id, category_id } = this.props;
    return (
      <li>
        <div className="content">
          <Link
            to={"/forum/" + category_id + "/question/" + id}
            className="h6 title forums"
          >
            {title}
          </Link>
          <time className="entry-date updated" dateTime="2017-06-24T18:18">
            <Moment format="dddd MM, YYYY \at HH:mm">{date}</Moment>
          </time>
        </div>
      </li>
    );
  }
}

export default recentQuestionTopic;
