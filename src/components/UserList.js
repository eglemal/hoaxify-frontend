import React from "react";
import * as apiCalls from "../api/apiCalls";

class UserList extends React.Component {
  componentDidMount() {
    apiCalls.listUsers().then(() => {});
  }

  render() {
    return (
      <div className="card">
        <h3 className="card-title m-auto">Users</h3>
      </div>
    );
  }
}
export default UserList;
