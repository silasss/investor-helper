import React, { useEffect } from "react";
import { HeaderPublicArea } from 'shared';
import { useStore } from "@/hooks/useStore";
import { fetchDashboards } from "@/reducers/dashboard/dashboard.actions";
import { useSelector } from "react-redux";
import { selectDashboards } from "@/reducers/dashboard/dashboard.selectors";

const Dashboard = () => {
  const { loading: loadingStore, store } = useStore();

  const dashboards = useSelector(selectDashboards)

  useEffect(() => {
    if (!loadingStore && store) {
      store.dispatch(fetchDashboards())
    }
  }, [loadingStore, store])

  return <>
    <HeaderPublicArea>
      <div>I am the header on Dashboard module!</div>
    </HeaderPublicArea>
    <div>Fetching graphql api to list dashboards:</div>
    <div>
      {dashboards?.map((dashboard) => (
        <div key={dashboard.id.toString()}>{dashboard.title}</div>
      ))}
    </div>
  </>
};

export default Dashboard;
