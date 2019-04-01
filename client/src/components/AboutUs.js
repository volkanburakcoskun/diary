import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="info-container">
          <h1 className="h1-diary">
            <p>Welcome to Diary</p>
          </h1>
          <p>
            Coded By Volkan Burak Coşkun, Computer Engineer.
            <br />
            <div align="center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/volkanburakcoskun"
                class="fa fa-facebook"
              />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/volkanburakcskn"
                class="fa fa-twitter"
              />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/volkanburakcoskun/"
                class="fa fa-linkedin"
              />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/volkanburakcoskun"
                class="fa fa-instagram"
              />
            </div>
          </p>
        </div>
      </div>
    );
  }
}
