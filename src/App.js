import React, { Component } from "react";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import SideBarRight from "./components/layout/SideBar_Right";
import Login from "./components/pages/Login";
import Profile from "./components/account/Index";
import EditProfile from "./components/account/editProfile";
import Forum from "./components/pages/Forum";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            {window.location.pathname !== "/login"
              ? [<SideBar />, <SideBarRight />, <Header />]
              : null}
            <Switch>
              <Route exact path="/" component={Forum} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/edit-profile" component={EditProfile} />
              <Route exact path="/login" pathname="login" component={Login} />
            </Switch>
            {window.location.pathname !== "/login" ? (
              <Link className="back-to-top" to="#">
                <img
                  src="svg-icons/back-to-top.svg"
                  alt="arrow"
                  class="back-icon"
                />
              </Link>
            ) : null}
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
