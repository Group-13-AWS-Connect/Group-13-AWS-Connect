import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: "/test",
      },
    });
  };

  return (
    <div className = "logout-btn">
    <button className=" button__logout" onClick={handleLogout}>
      Log Out
    </button>
    </div>
  );
};

export default LogoutButton;