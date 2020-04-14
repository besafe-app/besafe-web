import axios from 'axios';
import { base } from 'utils/constants/endpoints';

const BeSafeApi = axios.create({
  baseURL: base,
  origem: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default BeSafeApi;
