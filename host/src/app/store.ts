import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { userReducer } from '@/reducers/user/user.reducer';

export const staticReducers = {
  user: userReducer,
};

export const store = configureStore({
  reducer: staticReducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
