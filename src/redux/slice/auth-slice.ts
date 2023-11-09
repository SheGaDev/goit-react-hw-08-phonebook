import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { authState } from 'redux/state/auth-state';
import { authLoginThunk, authRegisterThunk } from 'redux/thunk/auth-thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(authRegisterThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isAuth = true;
        state.isLoading = false;
      });

    builder
      .addMatcher(isPending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
