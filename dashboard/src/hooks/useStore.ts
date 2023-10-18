import {
  AnyAction,
  Dispatch,
  ThunkDispatch,
  combineReducers,
} from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { reducers } from "../reducers";
import { RootState } from "shared";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

const useStore = () => {
  const [loading, setLoading] = useState(true);
  const [store, setStore] =
    useState<
      ToolkitStore<
        ThunkDispatch<RootState, undefined, AnyAction> & Dispatch<AnyAction>
      >
    >();

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
