import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dashboard } from "../../models/interfaces/dashboard.interface";
import { DashboardService } from "./dashboard.service";

export const fetchDashboards = createAsyncThunk<Dashboard[]>(
  "dashboard/fetchDashboards",
  DashboardService.getDashboards
);
