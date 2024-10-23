import React, { Component } from "react";

interface IPROPS {
  salary: number;
  name?: string;
}

interface ISTATE {
  age: number;
  address: {
    city: string;
  };
}
const data = {
  age: 65,
  address: {
    city: "Hyderabad",
  },
};

export default class ClassComponentProps extends Component<IPROPS, ISTATE> {
  constructor(props: IPROPS) {
    super(props);
    this.state = data;
  }
  render() {
    return (
      <>
        <h5 className="bg-primary p-2 text-light">Class Component</h5>
        <p>My Salary: {this.props.salary}</p>
        <p>Name : {this.props.name ? this.props.name : "Suresh"}</p>
        <h6 className="bg-primary p-2 text-white">States Example</h6>
        <p>Age :{this.state.age}</p>
        <p>City :{this.state.address.city}</p>
      </>
    );
  }
}
