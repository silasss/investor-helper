import { request, gql } from "graphql-request";
import { Wallet } from "shared";
import { BASE_PATH_BFF_API } from "shared";

const getWallets = async (): Promise<Wallet[]> => {
  const document = gql`
    query GetWallets {
      wallets {
        id
        title
      }
    }
  `;

  const response: { wallets: Wallet[] } = await request(
    BASE_PATH_BFF_API,
    document
  );

  return response.wallets;
};

export const WalletService = {
  getWallets,
};
