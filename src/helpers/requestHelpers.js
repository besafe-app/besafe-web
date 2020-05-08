/* eslint-disable no-use-before-define */
import API from 'utils/constants/api';

export const requestAPI = ({ verb, endPoint, data, id, query }) => {
  const token = localStorage.getItem('access-token');

  if (token) {
    Object.assign(API.defaults, {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE1ODYyNjU1NDM1OTIsInVwZGF0ZWRBdCI6MTU4NjQ0MDM4MzQ2NiwiaWQiOjEsIm5hbWUiOiIiLCJwaG9uZSI6Iis1NTMxOTg2NTQzOTMxIiwibmlja25hbWUiOiJDYXJsb3MiLCJjb2RlIjo0MDE3MTIsImdlbmRlciI6IiIsImJpcnRoZGF0ZSI6bnVsbCwiaWF0IjoxNTg2NDQwNDA1fQ.b8_V7suUtDh0a65tcrQVwgeOVvgDq4wmcbT-m1Jmsx8',
      uid: `${localStorage.getItem('uid')}`,
      client: `${localStorage.getItem('client')}`,
      'resource-type': `${localStorage.getItem('resource-type')}`,
    });
  }

  switch (verb) {
    case 'GET':
      return API.get(defineEndpoint(endPoint, id, query), data)
        .then((res) => res.data)
        .catch((error) => {
          throw error;
        });
    case 'POST':
      return API.post(defineEndpoint(endPoint, id), data)
        .then((res) => res.data)
        .catch((error) => {
          throw error;
        });
    case 'PUT':
      return API.put(defineEndpoint(endPoint, id), data)
        .then((res) => res.data)
        .catch((error) => {
          throw error;
        });
    case 'DELETE':
      return API.delete(defineEndpoint(endPoint, id))
        .then((res) => res.data)
        .catch((error) => {
          throw error;
        });
    default:
      return null;
  }
};

const defineEndpoint = (endPoint, id, query) => {
  if (typeof endPoint === 'function') {
    return endPoint(id);
  }
  if (query) {
    return `${endPoint}${query}`;
  }
  if (id) {
    return `${endPoint}/${id}`;
  }
  return endPoint;
};

export default requestAPI;
