import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";


export const User = ({ user }) => {
  return (
    <Card className="m-4">
      <Link to={`/users/${user.userName}`}>
      <p className="text-left px-2"><strong>User Name:</strong> {user?.userName}</p>
        <p className="text-left px-2"><strong>Email:</strong> {user?.email}</p>
        <p className="text-left px-2"><strong>Password:</strong> {user?.password}</p>
        <p className="text-left px-2"><strong>Is Reviewer:</strong> {user?.isReviewer ? 'Yes' : 'No'}</p>
        <p className="text-left px-2"><strong>GUID:</strong> {user?.guid}</p>
      </Link>
     </Card>
  );
};