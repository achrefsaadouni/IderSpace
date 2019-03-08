import React, { Component } from "react";
import Header from "./components/layout/Header";
import Login from "./pages/Login"

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="landing-page">

          <div className="content-bg-wrap"/>
          <Header />
          <Login />
          </div>
      </React.Fragment>
    );
  }
}

export default App;
