import { createReducer } from "@reduxjs/toolkit";
import { Wallet, WalletState } from "shared";
import { fetchWallets } from "./wallet.actions";

const initialState: WalletState = {
  wallets: [],
};

export const walletsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchWallets.pending, (state) => ({
    ...state,
    wallets: [],
  }));

  builder.addCase(fetchWallets.rejected, (state) => ({
    ...state,
    wallets: [],
  }));

  builder.addCase(fetchWallets.fulfilled, (state, action) => {
    // console.log("loaded", action.payload);
    return {
      ...state,
      wallets: action.payload,
    };
  });
});
