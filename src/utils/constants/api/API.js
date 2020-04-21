import axios from 'axios';
import * as urlsApi from 'utils/constants/endpoints';

const API = axios.create({
  baseURL: urlsApi.basePath,
  headers: {
    'Content-Type': 'application/json',
    'access-token': `${localStorage.getItem('access-token')}`,
    uid: `${localStorage.getItem('uid')}`,
    client: `${localStorage.getItem('client')}`,
    'resource-type': `${localStorage.getItem('resource-type')}`,
  },
});

API.interceptors.response.use(
  (response) => {
    if (!localStorage.getItem('access-token')) {
      localStorage.setItem('access-token', response.headers['access-token']);
      localStorage.setItem('uid', response.headers.uid);
      localStorage.setItem('client', response.headers.client);
      localStorage.setItem('resource-type', response.headers['resource-type']);
      return response;
    }
    localStorage.getItem('access-token');
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
    } else {
      return Promise.reject(error);
    }
  },
);

export default API;
