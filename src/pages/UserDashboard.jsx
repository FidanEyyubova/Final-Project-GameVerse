import React from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const logoutLogin = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("loggedInUser");
    navigate("/signin");
  };

  return (
    <div className="dashboard user-dashboard">
      <div className="container-fluid">
        <div className="dashboard-head d-flex justify-content-between px-3 align-items-center pt-4">
          <h3>Welcome, <i>{loggedInUser.username}!</i></h3>
          <button onClick={logoutLogin} aria-label="Log out">
            Logout <MdLogout className="out mb-1" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
