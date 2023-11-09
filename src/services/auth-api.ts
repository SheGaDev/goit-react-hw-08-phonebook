import { ILoginForm, IRegisterForm } from 'types/auth-types';
import { instance } from './instance';
import { fetchContacts } from './contacts-api';

export const authLogin = async (data: ILoginForm) => {
  const response = await instance.post('users/login', data);
  return response.data;
};
export const authSignup = async (data: IRegisterForm) => {
  const response = await instance.post('users/signup', data);
  return response.data;
};
export const authLogout = async (token: string) => {
  const response = await instance.post('users/logout', { Authorization: `Bearer: ${token}` });
  return response.data;
};

export const authUser = async () => {
  const response = await instance.get('users/current');
  return response.data;
};

export const fetchProfile = async () => {
  const user = await authUser();
  const contacts = await fetchContacts();
  return { name: user.name, email: user.email, contacts: contacts };
};
