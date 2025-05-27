import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  value: number;
}

const initialState: AppState = {
  value: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {  } = appSlice.actions;

export default appSlice.reducer;
