import React, { Component } from "react";

export default class Multiple extends Component {
  array = [
    {
      name: "Claudia",
      age: 25,
      id: 1
    },
    {
      name: "Jose",
      age: 23,
      id: 2
    }
  ];

  nameClicked(name) {
    alert(name);
  }

  render() {
    const items = this.array.map(el => (
      <div key={el.id}>
        <h5 onClick={() => this.nameClicked(el.name)}>{el.name}</h5>
        <p
          onClick={() => {
            alert(el.age);
          }}
        >
          Edad: {el.age}
        </p>
      </div>
    ));
    return <div>{items}</div>;
  }
}
