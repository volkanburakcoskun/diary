import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {
  setCurrentUser,
  logoutUser,
  clearCurrentUser
} from "./actions/authActions";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/layout/Navbar";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import store from "./store";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentUser());
    // Redirect to login
    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
