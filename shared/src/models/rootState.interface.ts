import { DashboardState } from "./interfaces/dashboard.interface";
import { UserState } from "./interfaces/user.interface";
import { WalletState } from "./interfaces/wallet.interface";

export interface RootState {
  user: UserState;
  wallet: WalletState;
  dashboard: DashboardState;
}
