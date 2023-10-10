// import { BASE_PATH } from "../../utils/constants";
import { Dashboard } from "../../models/interfaces/dashboard.interface";
// import http from '../../utils/http';

// const PATH = `${BASE_PATH}/user`;

const getDashboards = async (): Promise<Dashboard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { title: "Dash do Otávio Wallet 1" },
        { title: "Dash do Otávio Wallet 2" },
        { title: "Dash do Otávio Wallet 3" },
      ]);
    }, 1500);
  });
  // return http.get(`${PATH}`);
};

export const DashboardService = {
  getDashboards,
};
