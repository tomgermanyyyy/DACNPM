import axios from 'axios';
import { API_SERVER_URL } from '../config';

const AuthAPI = {
  login: (username, password) =>
    axios.post(`${API_SERVER_URL}/api/auth`, {
      username,
      password,
    }),
  getAuthUser: () => axios.get(`${API_SERVER_URL}/api/auth`),
};

export default AuthAPI;
