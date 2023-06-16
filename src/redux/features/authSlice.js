import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    createUser: (state, data) => {
      // In the state we have the current state data
      // data have the payload object which is passed in the argument of the action in the dispatch
      let updatedState = [...state, data.payload];
      return updatedState;
      // the returning variable will set to the state
    },
    removeUser: (state, data) => {
      let temp = [...state];
      temp.splice(data.payload, 1);
      return temp;
    },
  },
});

export const { createUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
