import React, { Component } from "react";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container" />
        </div>
      </Router>
    );
  }
}

export default App;
