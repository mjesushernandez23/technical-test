import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@store/store";
import { UiProps } from "@interfaces/uiProps";
import { LoginProps } from "@interfaces/apiProps";
import loginApi from "@api/authApi";

export const isAuthAsync = createAsyncThunk("isAuth/loginApi", async (values: LoginProps) => {
  const response = await loginApi(values);
  return response;
});

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
  extraReducers: builder => {
    builder.addCase(isAuthAsync.pending, state => {
      state.isLoading = true;
    }),
      builder.addCase(isAuthAsync.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.authStatus = action.payload;
        state.isLoading = false;
      });
  },
});

export const { activeLoading, disabledLoading } = uiSlice.actions;

export const selectUi = (state: AppState) => state.ui.isLoading;

export default uiSlice.reducer;
