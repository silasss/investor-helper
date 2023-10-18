import { RootState } from "shared";

export const selectDashboards = (state: RootState) =>
  state.dashboard?.dashboards;
