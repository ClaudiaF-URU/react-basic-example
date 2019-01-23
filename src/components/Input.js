import React, { Component } from "react";

export default class Input extends Component {
  sendValue(e) {
    console.log(this.props.callbackFromParent)
    this.props.callbackFromParent(e.target.value);
  }

  render() {
    return (
      <div>
        <label>Numero: </label>
        <input
          type="number"
          name="num"
          placeholder="ingrese numero"
          onChange={e => this.sendValue(e)}
        />
      </div>
    );
  }
}
