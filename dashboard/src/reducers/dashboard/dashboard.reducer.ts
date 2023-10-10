import { createReducer } from "@reduxjs/toolkit";
import { Dashboard } from "../../models/interfaces/dashboard.interface";
import { fetchDashboards } from "./dashboard.actions";

interface DashboardState {
  dashboards: Dashboard[];
}

const initialState: DashboardState = {
  dashboards: [],
};

export const dashboardsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchDashboards.pending, (state) => ({
    ...state,
    dashboards: [],
  }));

  builder.addCase(fetchDashboards.rejected, (state) => ({
    ...state,
    dashboards: [],
  }));

  builder.addCase(fetchDashboards.fulfilled, (state, action) => ({
    ...state,
    dashboards: action.payload,
  }));
});
