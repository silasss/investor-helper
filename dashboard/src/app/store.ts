import { configureStore } from "@reduxjs/toolkit";

import { dashboardsReducer } from "../reducers/dashboard/dashboard.reducer";

export const store = configureStore({
  reducer: {
    dashboards: dashboardsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
