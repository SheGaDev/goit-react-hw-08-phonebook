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
        state.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((contact) => contact.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(editContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex((contact) => contact.id === payload.id);
        if (index < 0) return;
        state.items[index] = payload;
        // state.items = state.items.map((contact) => (contact.id === payload.id ? payload : contact));
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

export const contactsReducer = contactsSlice.reducer;
export const { updateContacts } = contactsSlice.actions;
