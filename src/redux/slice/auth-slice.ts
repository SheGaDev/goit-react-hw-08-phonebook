import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { authState } from 'redux/state/auth-state';
import { authLoginThunk, authRegisterThunk, authUserThunk } from 'redux/thunk/auth-thunk';
import { instance } from 'services/instance';

export const authorizationAxios = (token?: string) =>
  (instance.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null);

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    logout: (state) => {
      authorizationAxios();
      state.isAuth = false;
      state.isLoading = false;
      state.error = null;
      state.token = null;
    },
    authorization: (state) => {
      if (state.token) authorizationAxios(state.token);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        authorizationAxios(payload.token);
        state.isAuth = true;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(authUserThunk.fulfilled, (state) => {
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(authRegisterThunk.fulfilled, (state, { payload }) => {
        authorizationAxios(payload.token);
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
export const { authorization, logout } = authSlice.actions;
