import React, { useEffect } from "react";
import "./dashboard.css";
import {
  decrement,
  increment,
  removeUser,
} from "../../redux/features/authSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../redux/features/currentUserSlice";

function Dashboard() {
  const currentUser = useSelector((state) => state.currentUser);
  useEffect(() => {
    if (currentUser === null) {
      navigate("/signup");
    }
  }, [currentUser]);
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth);
  const { name, email, password } = currentUser || {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  return (
    <div className="fullscreen">
      <div className="header">
        <div className="header-name">Dashboard</div>
        <div
          className="logout"
          onClick={() => {
            navigate("/signup");
            dispatch(removeUser(currentUser));
            dispatch(setCurrentUser(null));
          }}
        >
          Logout
        </div>
      </div>
      <div className="user-details">
        <div className="title">Name Info</div>
        <div className="data">Name : {name}</div>
        <div className="data">Email : {email}</div>
        <div className="data">Password : {password}</div>
      </div>
    </div>
  );
}

export default Dashboard;
