import React, { Component } from "react";
import SearchItem from "./searchItem";
import Spinner from "../common/Spinner";
import { getSearchResult } from "../../store/actions/forumActions";
import { connect } from "react-redux";

class searchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: []
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.text);
    this.props.getSearchResult(this.props.match.params.text);
  }
  render() {
    const { search, loading } = this.props.forum;
    if (search == null || loading) return <Spinner />;
    const isAprouved = comments => {
      const a = comments.filter(c => c.approved === true);
      if (a.length > 0) return true;
      return false;
    };
    const results = search.map(item => (
      <SearchItem
        user={item.author}
        subject={item.subject}
        content={item.content}
        id={item._id}
        category_id={item.category}
        approuved={isAprouved(item.comments)}
      />
    ));
    return (
      <React.Fragment>
        <div className="header-spacer header-spacer-small" />
        <div className="main-header">
          <div className="content-bg-wrap bg-badges" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Search result for {this.props.match.params.text}</h1>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-bottom"
            src="/img/badges-bottom.png"
            alt="friends"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              {results}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    forum: state.forum,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { getSearchResult }
)(searchResult);
