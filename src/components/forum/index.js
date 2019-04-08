import React, { Component } from "react";
import Category from "./category";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getForum } from "../../store/actions/forumActions";
import Spinner from "../common/Spinner";

class index extends Component {
  componentDidMount() {
    this.props.getForum();
  }
  render() {
    const { forum, loading } = this.props.forum;

    if (forum === undefined || loading) {
      return <Spinner />;
    }
    console.log(forum);
    const categories = forum.map(item => (
      <Category
        key={item._id}
        id={item._id}
        name={item.category}
        description="Talk about dinner parties, reunions and more!"
      />
    ));

    return (
      <React.Fragment>
        <div className="header-spacer header-spacer-small" />
        <div className="main-header">
          <div className="content-bg-wrap bg-group" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Welcome to the Q&A Forums!</h1>
                  <p>
                    Here in the forums you’ll be able to easily create and
                    manage question and answers to share with the community! The
                    forum offer questions and answers on a wide range of themes
                    concerning computer programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-bottom"
            src={process.env.PUBLIC_URL + "/img/group-bottom.png"}
            alt="friends"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                <div className="ui-block-title">
                  <div className="h6 title">Q/A Forums</div>
                  <div className="align-right">
                    <form className="w-search">
                      <div className="form-group with-button">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search the forums..."
                        />
                        <button>
                          <svg className="olymp-magnifying-glass-icon">
                            <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Forums Table */}
                <table className="forums-table">
                  <thead>
                    <tr>
                      <th />
                      <th className="forum text-center">Category</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>{categories}</tbody>
                </table>
                {/* ... end Forums Table */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

index.propTypes = {
  forum: PropTypes.object.isRequired,
  getForum: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  forum: state.forum
});

export default connect(
  mapStateToProps,
  { getForum }
)(index);
