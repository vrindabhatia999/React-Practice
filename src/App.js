import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUser addUsers={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
