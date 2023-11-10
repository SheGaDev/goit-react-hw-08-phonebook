import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { ContactState } from 'redux/state/contacts-state';
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  fetchContactsThunk,
} from 'redux/thunk/contacts-thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: ContactState,
  reducers: {
    updateContacts: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((contact) => contact.id !== payload.id);
      })
      .addCase(editContactThunk.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex((contact) => contact.id === payload.id);
        if (index < 0) return;
        state.items[index] = payload;
        // state.items = state.items.map((contact) => (contact.id === payload.id ? payload : contact));
      });
    builder
      .addMatcher(isPending, (state) => {
        state.error = null;
      })
      .addMatcher(isRejected, (state, { payload }) => {
        state.error = payload as string;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { updateContacts } = contactsSlice.actions;
