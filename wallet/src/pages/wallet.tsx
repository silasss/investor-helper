import React, { useEffect } from "react";
import { HeaderPublicArea, RootState } from 'shared';
import { useStore } from "@/hooks/useStore";
import { fetchWallets } from "@/reducers/wallet/wallet.actions";
import { useSelector } from "react-redux";
import { selectWallets } from "@/reducers/wallet/wallet.selectors";

const Wallet = () => {
  const { loading: loadingStore, store } = useStore();

  const wallets = useSelector(selectWallets)

  useEffect(() => {
    if (!loadingStore && store) {
      store.dispatch(fetchWallets())
    }
  }, [loadingStore, store])

  return <>
    <HeaderPublicArea>
      <div>I am the header!</div>
    </HeaderPublicArea>
    <div>Fetching graphql api to list Wallets:</div>
    <div>
      {wallets?.map((wallet) => (
        <div key={wallet.id.toString()}>{wallet.title}</div>
      ))}
    </div>
  </>
};

export default Wallet;
