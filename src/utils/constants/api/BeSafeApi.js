import axios from 'axios';
import { BASE_URL_BESAFE } from 'utils/constants/urls';

const BeSafeApi = axios.create({
  baseURL: BASE_URL_BESAFE,
  origem: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default BeSafeApi;
