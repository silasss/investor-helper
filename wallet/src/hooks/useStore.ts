import { Dispatch, combineReducers } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { reducers } from "../reducers";

const useStore = () => {
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState(); //<
  //   ThunkDispatch<{
  //     user: UserState;
  //   }, undefined, AnyAction> & Dispatch<AnyAction>
  // >();

  useEffect(() => {
    const loadStore = async () => {
      const hostStore = await import("host/store");

      hostStore.store.replaceReducer(
        combineReducers({
          ...hostStore.staticReducers,
          ...reducers,
        })
      );

      setStore(hostStore.store);
      setLoading(false);
    };

    loadStore();
  }, []);

  return { loading, store };
};

export { useStore };
