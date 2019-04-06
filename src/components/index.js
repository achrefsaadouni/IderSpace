import React, { Component } from "react";
//import { PrivateRoute } from "../components/PrivateRoute";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import Login from "./pages/Login";
import Profile from "./account/Index";
import EditProfile from "./account/editProfile";
import Forum from "./forum/index";
import Category from "./forum/category/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { autoAuthUser } from "../store/actions/authActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class index extends Component {
  componentDidMount() {
    this.props.autoAuthUser();
  }

  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { isAuth } = props;

    if (isAuth) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
      <Router>
        <React.Fragment>
          {isAuthenticated ? [<SideBar key={1} />, <Header key={2} />] : null}
          <Switch>
            <PrivateRoute
              isAuth={this.props.isAuth}
              exact
              path="/forum"
              component={Forum}
            />
            <PrivateRoute
              isAuth={this.props.isAuth}
              path="/category"
              component={Category}
            />
            <PrivateRoute
              isAuth={this.props.isAuth}
              exact
              path="/profile"
              component={Profile}
            />
            <PrivateRoute
              isAuth={this.props.isAuth}
              exact
              path="/edit-profile"
              component={EditProfile}
            />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} isAuth={this.props.isAuth} />}
            />
          </Switch>
          {isAuthenticated ? (
            <Link className="back-to-top" to="#">
              <img
                src="svg-icons/back-to-top.svg"
                alt="arrow"
                className="back-icon"
              />
            </Link>
          ) : null}
        </React.Fragment>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: state.auth.isAuthenticated
  };
};

index.propTypes = {
  autoAuthUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { autoAuthUser }
)(index);
