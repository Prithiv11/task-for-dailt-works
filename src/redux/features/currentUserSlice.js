import { createSlice } from "@reduxjs/toolkit";
const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    setCurrentUser: (state, data) => {
      return data.payload;
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
