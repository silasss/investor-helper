import { createAsyncThunk } from "shared";
import { Dashboard } from "../../models/interfaces/dashboard.interface";
import { DashboardService } from "./dashboard.service";

export const fetchDashboards = createAsyncThunk<Dashboard[]>(
  "dashboard/fetchDashboards",
  DashboardService.getDashboards
);
