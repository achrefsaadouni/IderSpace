import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class category extends Component {
  render() {
    const { id, name, description } = this.props;
    return (
      <tr>
        <td className=" text-center">
          <img src="/img/forum6.png" alt="forum" />
        </td>
        <td className="forum text-center">
          <div className="forum-item">
            <div className="content">
              <Link to={"forum/" + id} className="h6 title">
                  {name}
              </Link>
              <p className="text">{description}</p>
            </div>
          </div>
        </td>
        <td className=" text-center">
          <img src="/img/forum6.png" alt="forum" />
        </td>
      </tr>
    );
  }
}
