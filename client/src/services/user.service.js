import axios from 'axios';
import { API_SERVER_URL } from '../config';

const UserAPI = {
  changePassword: (username, oldPassword, newPassword) =>
    axios.patch(`${API_SERVER_URL}/api/users/password`, {
      username,
      oldPassword,
      newPassword,
    }),
};

export default UserAPI;
