import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { authorizationAxios } from 'redux/slice/auth-slice';
import { resetUser, setUser } from 'redux/slice/user-slice';
import { authLogin, authLogout, authSignup, authUser } from 'services/auth-api';
import { fetchContacts } from 'services/contacts-api';
import {
  ILoginForm,
  ILoginResponse,
  IRegisterForm,
  IRegisterResponse,
  IUser,
} from 'types/auth-types';
import { ThunkConfig } from 'types/thunk-types';
import { updateContacts } from 'redux/slice/contacts-slice';
import { IContact } from 'types/contacts-types';

export const authLoginThunk = createAsyncThunk<ILoginResponse, ILoginForm, ThunkConfig>(
  'auth/login',
  async (state, api) => {
    try {
      const data = await authLogin(state);
      authorizationAxios(data.token);
      const contacts: IContact[] = await fetchContacts();
      api.dispatch(
        setUser({
          name: data.user.name,
          email: data.user.email,
          contacts: contacts.length,
        })
      );
      api.dispatch(updateContacts(contacts));
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
      api.dispatch(setUser({ user: data.user, contacts: 0 }));
      return data;
    } catch (err) {
      if (isAxiosError(err)) return api.rejectWithValue(err.message);
    }
  }
);

export const authLogoutThunk = createAsyncThunk<unknown, string, ThunkConfig>(
  'auth/logout',
  async (token, api) => {
    try {
      const data = await authLogout(token);
      api.dispatch(resetUser());
      return data;
    } catch (err) {
      if (isAxiosError(err)) return api.rejectWithValue(err.message);
    }
  }
);

export const authUserThunk = createAsyncThunk<IUser, undefined, ThunkConfig>(
  'auth/current',
  async (_, api) => {
    try {
      const dataUser = await authUser();
      const contacts: IContact[] = await fetchContacts();
      const data = {
        ...dataUser,
        contacts: contacts.length,
      };
      api.dispatch(updateContacts(contacts));
      api.dispatch(setUser(data));
      return data;
    } catch (err) {
      if (isAxiosError(err)) return api.rejectWithValue(err.message);
    }
  }
);
