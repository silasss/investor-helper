import { createAsyncThunk } from "@reduxjs/toolkit";
import { Wallet } from "shared";
import { WalletService } from "./wallet.service";

export const fetchWallets = createAsyncThunk<Wallet[]>(
  "wallet/fetchWallets",
  WalletService.getWallets
);
