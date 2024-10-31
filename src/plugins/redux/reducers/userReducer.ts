import { InitialStateTypes } from "@/interfaces/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialStateTypes = {
  refreshToken: "",
  accessToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    clearAccessToken(state) {
      state.accessToken = "";
    },
    clearRefreshToken(state) {
      state.refreshToken = "";
    },
    clearAll(state) {
      state.refreshToken = "";
      state.accessToken = "";
    },
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  clearAccessToken,
  clearRefreshToken,
  clearAll,
} = userSlice.actions;

export default userSlice.reducer;