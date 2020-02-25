import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        lname: ""
      },
      users: [],
      index: null
    };
  }

  editUser = i => {
    let user = Object.assign({}, this.state.users[i]);
    this.setState({ user, index: i });
  };
  createUser = () => {
    const { user, users } = this.state;

    console.log(user);
    users.push(user);
    this.setState({ users }, () => {
      console.log(this.state.users);
      this.clearForm();
    });
  };

  clearForm = () => {
    let user = {
      fname: "",
      lname: ""
    };
    this.setState({ user });
  };

  handleChange = event => {
    let user = Object.assign({}, this.state.user);
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  deleteUser = i => {
    const { users } = this.state;
    if (users.length == 1) {
      alert("Last uSer cannot be deleted");
    } else {
      users.splice(i, 1);
      this.setState({ users });
    }
  };

  updateUser = () => {
    let { users } = this.state;
    users[this.state.index] = this.state.user;
    this.setState({ users });
    this.clearForm();
  };
  render() {
    const { fname, lname } = this.state.user;
    const { users } = this.state;
    return (
      <div className="container">
        <h2>Welcome to User Component</h2>
        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            value={fname}
            name="fname"
            onChange={event => {
              this.handleChange(event);
            }}
          />
          <br />
          <label htmlFor="lname">Last Name : </label>
          <input
            type="text"
            value={lname}
            name="lname"
            onChange={event => {
              this.handleChange(event);
            }}
          />
          <br />
          <button type="button" onClick={this.createUser}>
            Create User
          </button>
          <button onClick={this.updateUser} type="button">
            Update User
          </button>
        </form>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user.fname}>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        this.editUser(index);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteUser(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
