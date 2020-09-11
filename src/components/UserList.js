import React from "react";
import * as apiCalls from "../api/apiCalls";

class UserList extends React.Component {
  state = {
    page: {
      number: 0,
      size: 3,
    },
  };
  componentDidMount() {
    apiCalls
      .listUsers({ page: this.state.page.number, size: this.state.page.size })
      .then(() => {});
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
