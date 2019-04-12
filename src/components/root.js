import React, { Component } from "react";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import Login from "./pages/Login";
import Profile from "./account/Index";
import EditProfile from "./account/editProfile";
import Forum from "./forum/index";
import Category from "./category/index";
import Question from "./question/Index";
import ChatBot from "./ChatBot/ChatBot";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Error from "./common/Error";
import PrivateRoute from "./common/PrivateRoute";
import Recommandation from "./recommandation/recommandation";
import ListRecommanded from "./recommandation/listRecommanded";

class root extends Component {
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
          {isAuthenticated ? [<SideBar key={1} />, <Header key={2} /> , <ChatBot key={3} />] : null}
          <Switch>
            <PrivateRoute exact path="/forum" component={Forum} />

            <PrivateRoute
              path="/forum/:category_id"
              exact
              component={Category}
            />

            <PrivateRoute
              exact
              path="/forum/:category_id/question/:question_id"
              component={Question}
            />

            <PrivateRoute
                exact
                path="/getReco"
                component={Recommandation}
            />
            <PrivateRoute
                exact
                path="/listReco"
                component={ListRecommanded}
            />

            <PrivateRoute exact path="/profile" component={Profile} />

            <PrivateRoute exact path="/edit-profile" component={EditProfile} />

            <Route exact path="/login" component={Login} />

            <Route exact path="*" component={Error} />
          </Switch>

          {isAuthenticated ? (
            <Link className="back-to-top" to="#">
              <img
                src="/svg-icons/back-to-top.svg"
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

root.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(root);
