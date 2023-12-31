import { BASE_PATH } from '../../utils/constants';
import { User } from '../../models/interfaces/user.interface';
// import http from '../../utils/http';

const PATH = `${BASE_PATH}/user`;

const getLoggedUser = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        name: 'Otávio Agues Silva',
      });
    }, 1500);
  });
  // return http.get(`${PATH}`);
};

export const UserService = {
  getLoggedUser,
};
