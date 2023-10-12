export interface Wallet {
  id: Number;
  title: string;
}

export interface WalletState {
  wallets: Wallet[];
}
