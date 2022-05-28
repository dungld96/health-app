import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthState, initialStateType } from "./types";
import { getCurrentHealth } from "./actions";
const auth: AuthState = {
  id: 0,
  username: "admin",
  email: "admin@health.com",
  name: "Admin",
};

const initialState: initialStateType = {
  auth,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentHealth.fulfilled, (state, action) => {
      state['health'] = action.payload[0];
    });
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
