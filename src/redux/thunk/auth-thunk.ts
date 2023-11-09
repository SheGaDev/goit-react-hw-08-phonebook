import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { authorizationAxios } from 'services/instance';
import { authLogin, authLogout, authSignup } from 'services/auth-api';
import { ILoginForm, ILoginResponse, IRegisterForm, IRegisterResponse } from 'types/auth-types';
import { ThunkConfig } from 'types/thunk-types';

export const authLoginThunk = createAsyncThunk<ILoginResponse, ILoginForm, ThunkConfig>(
  'auth/login',
  async (state, api) => {
    try {
      const data = await authLogin(state);
      authorizationAxios(data.token);
      return data;
    } catch (err) {
      if (isAxiosError(err)) return api.rejectWithValue(err.message);
    }
  }
);

export const authRegisterThunk = createAsyncThunk<IRegisterResponse, IRegisterForm, ThunkConfig>(
  'auth/register',
  async (state, api) => {
    try {
      const data = await authSignup(state);
      authorizationAxios(data.token);
      return data;
    } catch (err) {
      if (isAxiosError(err)) return api.rejectWithValue(err.message);
    }
  }
);

export const authLogoutThunk = createAsyncThunk<unknown, undefined, ThunkConfig>(
  'auth/logout',
  async (_, api) => {
    try {
      const { token } = api.getState().auth;
      if (token) authLogout(token);
      authorizationAxios(null);
    } catch (err) {
      if (isAxiosError(err)) return api.rejectWithValue(err.message);
    }
  }
);
