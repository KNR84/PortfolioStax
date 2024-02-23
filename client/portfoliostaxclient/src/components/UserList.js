import React, { useState, useEffect } from "react";
import { getAllUsers } from "../APIManagers/UserManager";
import { User } from "./User";


const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    getAllUsers().then(allUsers => setUsers(allUsers)); 
  };

  useEffect(() => {
    getUsers();
  }, []); 

  return (  
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
