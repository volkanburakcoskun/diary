import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/new">
            Tell
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link"
            to=""
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul class="navbar-nav mr-left auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
            </ul>

            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
