import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";
import { selectRootState } from "../selectRootState";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null as User | null,
  },
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const selectUser = createSelector(
  selectRootState,
  (state) => state.userSlice.user
);
