import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/layout/Navbar";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
