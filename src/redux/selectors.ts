import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';
import { ContactsState, IContact } from 'types/contacts-types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => useAppSelector((state) => state.auth);

export const useContacts = () => useAppSelector((state) => state.contacts);

export const useFilter = () => useAppSelector((state) => state.filter);

const selectFilterItems = createSelector(
  [useContacts, useFilter],
  (contacts, filter): ContactsState => {
    const filtration = ({ name }: IContact) => name.toLowerCase().includes(filter.toLowerCase());
    return {
      ...contacts,
      items: contacts.items.filter(filtration),
    };
  }
);
export const useFilterItems = () => useSelector(selectFilterItems);

export const useUser = () => useAppSelector((state) => state.user);
