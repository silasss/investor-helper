import { BASE_PATH_BFF_API } from "shared";
import { Dashboard } from "shared";
import request, { gql } from "graphql-request";

const getDashboards = async (): Promise<Dashboard[]> => {
  const document = gql`
    query GetDashboards {
      wallets {
        id
        title
      }
    }
  `;

  const response: { wallets: Dashboard[] } = await request(
    BASE_PATH_BFF_API,
    document
  );

  // @todo replace by dashboards
  return response.wallets;
};

export const DashboardService = {
  getDashboards,
};
