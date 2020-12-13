/* Developed by Prince Paraste */
import React from "react";
import axios from "axios";
import "../App.css";

export default class User extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data });
      });
  }

  render() {
    return (
      <div className="row d-flex justify-content-center">
        {this.state.users.map((user) => (
          <div className="user__block" key={user.id}>
            <span className="user__name">{user.name}</span>
            <img className="img-fluid user__image" src={user.Image} />
          </div>
        ))}
      </div>
    );
  }
}
