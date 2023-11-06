import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const isAuthAxios = (token: string): boolean => {
  return instance.defaults.headers.common.Authorization === token;
};
