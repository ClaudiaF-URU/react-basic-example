import React, { Component } from "react";
import "./styles.css";

export default class PropertiesAndState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };
  }

  showOrNot() {
    setInterval(() => {
      this.setState({ shown: !this.state.shown });
    }, 600);
  }

  componentDidMount() {
    console.log(this.props);
    this.showOrNot();
  }

  render() {
    let msg;
    if (this.state.shown) {
      msg = (
        <p className="msg">
          state it's <span className="true msg-2">TRUE</span>
        </p>
      );
    } else {
      msg = (
        <p className="msg">
          state it's <span className="false msg-2">FALSE</span>
        </p>
      );
    }
    return (
      <div>
        <p>
          Recibido como prop:{" "}
          <span className="fromParent">{this.props.title}</span>
        </p>
        <p>Doble del recibido por prop: {this.props.number * 2}</p>
        {msg}
      </div>
    );
  }
}
