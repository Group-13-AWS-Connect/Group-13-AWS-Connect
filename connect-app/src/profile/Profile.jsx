import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "../dashboard/Sidebar";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const namespace = "https://empid.example.com/";

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
         <div className="">
      <div className ="sidebar-space">
     <Sidebar/>
      </div>
      </div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>Given Name: {user.given_name}</p>
        <p>Employee ID: {user[`${namespace}emp_id`]}</p>
      </div>
    )
  );
};

export default Profile;

