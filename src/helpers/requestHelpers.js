/* eslint-disable no-use-before-define */
import API from 'utils/constants/api';

export const requestAPI = ({
  verb, endPoint, data, id, query,
}) => {
  const token = localStorage.getItem('access-token');

  if (token) {
    Object.assign(API.defaults, {
      'access-token': `${localStorage.getItem('access-token')}`,
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
    // case 'POST':
    //   return API.post(defineEndpoint(endPoint, id), data)
    //     .then((res) => res.data)
    //     .catch((error) => {
    //       throw error;
    //     });
    case 'PUT':
      return API.put(defineEndpoint(endPoint, id), data)
        .then((res) => res.data)
        .catch((error) => {
          throw error;
        });
    // case 'DELETE':
    //   return API.delete(defineEndpoint(endPoint, id))
    //     .then((res) => res.data)
    //     .catch((error) => {
    //       throw error;
    //     });
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
