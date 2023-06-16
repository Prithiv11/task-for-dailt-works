import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import currentUser from "./currentUserSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  currentUser: currentUser,
});

export default rootReducer;
