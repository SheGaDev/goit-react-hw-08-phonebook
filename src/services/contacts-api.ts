import { IContact } from 'types/contacts-types';
import { instance } from './instance';

export const fetchContacts = async () => {
  const response = await instance.get('contacts');
  return response.data;
};

export const addContact = async (data: IContact) => {
  const response = await instance.post('contacts', data);
  return response.data;
};

export const deleteContact = async (id: string) => {
  const response = await instance.delete(`contacts/${id}`);
  return response.data;
};

export const editContact = async (data: IContact) => {
  const response = await instance.patch(`contacts/${data.id}`, {
    name: data.name,
    number: data.number,
  });
  return response.data;
};
