import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'types/auth-types';

const initialState: IUser = {
  name: null,
  email: null,
  contacts: 0,
};
export enum UpdateType {
  Increment = 'INCREMENT',
  Decrement = 'DECREMENT',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.contacts = payload.contacts;
    },
    resetUser: (state) => {
      state.name = null;
      state.email = null;
      state.contacts = 0;
    },
    updateUser: (state, { payload }) => {
      if (UpdateType.Increment === payload) state.contacts += 1;
      else state.contacts -= 1;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser, resetUser, updateUser } = userSlice.actions;
