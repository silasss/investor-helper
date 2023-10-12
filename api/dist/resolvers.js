// import { AddWalletInput, Wallet } from "./types";
const wallets = [
    { id: "1", title: "Wallet 1" },
    { id: "2", title: "Wallet 2" },
    { id: "3", title: "Wallet 3" },
];
export const resolvers = {
    Query: {
        getWallets: () => wallets,
        getWallet: (id) => wallets.find((wallet) => wallet.id === id),
    },
    Mutation: {
        addWallet: (_parent, { input }) => {
            const id = String(wallets.length + 1);
            const wallet = { id, ...input };
            wallets.push(wallet);
            return wallet;
        },
    },
};
