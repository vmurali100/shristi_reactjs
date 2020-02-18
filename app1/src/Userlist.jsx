import React, { Component } from "react";
import Userdetails from "./Userdetails";
import axios from "axios";

export default class Userlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  deleteUser = index => {
    let users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users });
  };

  componentDidMount() {
    console.log("componentDidMount triggerd");
    axios
      .get(
        "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&pretty=true"
      )
      .then(res => {
        this.setState({ users: res.data });
      });
    // fetch(
    //   "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&pretty=true"
    // )
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ users: data });
    //   });
  }
  render() {
    return (
      <div>
        {this.state.users.map((user, index) => {
          return (
            <Userdetails
              key={index}
              {...user}
              deleteUser={this.deleteUser}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}
