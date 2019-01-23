import React, { Component } from "react";
import PropertiesAndState from "../../components/PropertiesAndState";
import Input from "../../components/Input";
import Output from "../../components/Output";
import Multiple from "../../components/Multiple";
import Validation from "../../components/Validation";
import "./initial.css";

export default class Initial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: null
    };
  }

  title='Hello from parent component';

  callbackToGet = dataFromChild => {
    this.setState({ dataFromChild });
  };

  render() {
    return (
      <div>
        <h1 className="title">Ejemplo basico React App</h1>
        {/* <PropertiesAndState title={this.title} number="23"/>
        <Input callbackFromParent={this.callbackToGet} />
        <Output receiveData={this.state.dataFromChild}/>
        <Multiple />
        <Validation canLog={false} /> */}
      </div>
    );
  }
}
