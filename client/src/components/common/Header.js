import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="info-container">
          <h1 className="newpost">Create Post</h1>
          <p className="p-newpost">
            Write your thoughts about the day.
            <br />
          </p>
        </div>
      </div>
    );
  }
}
