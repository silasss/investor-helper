import React, { useEffect } from "react";
import { HeaderPublicArea } from 'shared';
import { useStore } from "@/hooks/useStore";
import { fetchWallets } from "@/reducers/wallet/wallet.actions";
import { useSelector } from "react-redux";

const Wallet = () => {
  const { loading: loadingStore, store } = useStore();

  // const wallets = useSelector(store => store.wallets)
// console.log('heeere', wallets);

  useEffect(() => {
    if (!loadingStore && store) {
      store.dispatch(fetchWallets())
    }
  }, [loadingStore, store])

  return <>
    <HeaderPublicArea>
      <div>I am the header!</div>
    </HeaderPublicArea>
    <div>You mean, my Wallet?</div>
  </>
};

export default Wallet;
