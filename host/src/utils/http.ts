import axios from 'axios';
import { BASE_PATH } from './constants';

const http = () => {
  const instance = axios.create({
    baseURL: BASE_PATH,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return instance;
};

export default http();
