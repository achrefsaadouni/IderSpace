import React, { Component } from "react";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import SideBar_Right from "./components/layout/SideBar_Right";
import Login from "./pages/Login";
import Forum from "./pages/Forum";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          {window.location.pathname !== "/login"
            ? [<SideBar />, <SideBar_Right />, <Header />]
            : null}
          <Switch>
            <Route exact path="/" component={Forum} />
            <Route exact path="/login" component={Login} />
          </Switch>
          {window.location.pathname !== "/login" ? (
            <a class="back-to-top" href="#">
              <img
                src="svg-icons/back-to-top.svg"
                alt="arrow"
                class="back-icon"
              />
            </a>
          ) : null}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
