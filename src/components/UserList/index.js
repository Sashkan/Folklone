import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => {
          return <p>{user.name}</p>;
        })}
      </div>
    </div>
  );
};

export default UserList;
