import React from "react";
import { useSelector } from "react-redux";
import UserList from "../../components/UserList";

const UsersContainer = () => {
  const users = useSelector((state) => state.users.data);

  console.log(users);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default UsersContainer;
