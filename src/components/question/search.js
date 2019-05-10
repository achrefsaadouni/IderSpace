import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd/lib/radio";

export default class search extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const { text } = this.state;
    const { history } = this.props;
    history.push("search/" + text);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="w-search">
        <div className="form-group with-button">
          <input
            className="form-control"
            type="text"
            placeholder="Search the forums..."
            onChange={this.onChange}
            value={text}
            name="text"
          />
          <Link to={"/search/" + text}>
            <svg
              className="olymp-magnifying-glass-icon"
              style={{ marginTop: "15px" }}
            >
              <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
            </svg>
          </Link>
        </div>
      </form>
    );
  }
}
