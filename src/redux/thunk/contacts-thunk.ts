import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { UpdateType, updateUser } from 'redux/slice/user-slice';
import { addContact, deleteContact, editContact, fetchContacts } from 'services/contacts-api';
import { IContact, IContactForm } from 'types/contacts-types';
import { ThunkConfig } from 'types/thunk-types';

export const addContactThunk = createAsyncThunk<IContact, IContactForm, ThunkConfig>(
  'contacts/add',
  async (state, api) => {
    const contact = {
      ...state,
      id: nanoid(),
    };
    try {
      const data = await addContact(contact);
      api.dispatch(updateUser(UpdateType.Increment));
      return data;
    } catch (err) {
      if (isAxiosError(err)) api.rejectWithValue(err.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk<IContact, string, ThunkConfig>(
  'contacts/delete',
  async (state, api) => {
    try {
      const data = await deleteContact(state);
      return data;
    } catch (err) {
      if (isAxiosError(err)) api.rejectWithValue(err.message);
    }
  }
);

export const fetchContactsThunk = createAsyncThunk<IContact[], undefined, ThunkConfig>(
  'contacts/fetch',
  async (_, api) => {
    try {
      const data = await fetchContacts();
      return data;
    } catch (err) {
      if (isAxiosError(err)) api.rejectWithValue(err.message);
    }
  }
);

export const editContactThunk = createAsyncThunk<IContact, IContact, ThunkConfig>(
  'contacts/edit',
  async (state, api) => {
    try {
      const data = await editContact(state);
      return data;
    } catch (err) {
      if (isAxiosError(err)) api.rejectWithValue(err.message);
    }
  }
);
