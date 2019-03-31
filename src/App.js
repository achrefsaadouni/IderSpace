import React, { Component } from "react";
import Root from "./components/index";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
