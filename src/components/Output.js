import React, { Component } from "react";

export default class Output extends Component {
  render() {
    let number = null;
    if (!isNaN(parseFloat(this.props.receiveData)))
      number = parseFloat(this.props.receiveData);
    return (
      <div>
        <p>Result: {number * 5}</p>
      </div>
    );
  }
}
