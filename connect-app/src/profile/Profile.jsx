import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

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
      <a href="/dashboard" style={{ color: '#A3AED0' }}>Dashboard</a>
      </div>
      <div className ="sidebar-space">
      <a href="/profile" style={{ color: '#A3AED0' }}>Profile</a>
      </div>
      <div className ="sidebar-space">
      <a href="#" style={{ color: '#A3AED0' }}>Queue</a>
      </div>
      <div className ="sidebar-space">
      <a href="/recordings" style={{ color: '#A3AED0' }}>Recordings</a>
      </div>
      <div className ="sidebar-space">
      <a href="/team" style={{ color: '#A3AED0' }}>Team Members</a>
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

