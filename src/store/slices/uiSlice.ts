import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@store/store";
import { UiProps } from "interfaces/uiProps";

const initialState: UiProps = {
  isLoading: false,
  authStatus: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    activeLoading: state => {
      state.isLoading = true;
    },
    disabledLoading: state => {
      state.isLoading = false;
    },
  },
});

export const { activeLoading, disabledLoading } = uiSlice.actions;

export const selectUi = (state: AppState) => state.ui.isLoading;

export default uiSlice.reducer;
