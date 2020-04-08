/* eslint-disable import/prefer-default-export */
import { constants } from 'utils/constants';
import BeSafeApi from 'utils/constants/api';


const defineEndpoint = (endpoint, id, query) => {
  if (typeof endpoint === 'function') {
    return endpoint(id);
  }
  if (query) {
    return `${endpoint}?${query}`;
  }
  if (id) {
    return `${endpoint}/${id}`;
  }
  return endpoint;
};

const defineAPI = (api) => {
  if (api === constants.BESAFE_API) {
    return BeSafeApi;
  }
  return null;
};

export const requestAPI = ({
  font, verb, endpoint, data, id, query,
}) => {
  const API = defineAPI(font);
  switch (verb) {
    case 'GET':
      return API.get(defineEndpoint(endpoint, id, query), data)
        .then((res) => res)
        .catch((error) => {
          throw error;
        });
    case 'POST':
      return API.post(defineEndpoint(endpoint, id, query), data)
        .then((res) => res)
        .catch((error) => {
          throw error;
        });
    default:
      return null;
  }
};

export default requestAPI;
