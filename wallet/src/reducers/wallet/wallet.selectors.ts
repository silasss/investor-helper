import { RootState } from "shared";

export const selectWallets = (state: RootState) => state.wallet?.wallets;
