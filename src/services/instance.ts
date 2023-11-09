import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const authorizationAxios = (token: string | null) =>
  (instance.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null);
