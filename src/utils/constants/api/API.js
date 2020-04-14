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

export default API;
