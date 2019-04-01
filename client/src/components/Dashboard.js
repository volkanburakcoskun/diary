import React, { Component } from "react";
import { runInContext } from "vm";
import Construction from "./common/Construction";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Construction />
      </div>
    );
  }
}
