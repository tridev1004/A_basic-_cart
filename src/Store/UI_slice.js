import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: { cartISVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartISVisible = !state.cartISVisible;
    },
    setnotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UiActions = uiSlice.actions;

export default uiSlice;
