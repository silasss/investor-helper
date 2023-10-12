import { createReducer } from '@reduxjs/toolkit';
import { User, UserState } from 'shared';
import { fetchUserLogged } from './user.actions';

const initialState: UserState = {
  logged: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchUserLogged.pending, (state) => ({
    ...state,
    logged: null,
  }));

  builder.addCase(fetchUserLogged.rejected, (state) => ({
    ...state,
    logged: null,
  }));

  builder.addCase(fetchUserLogged.fulfilled, (state, action) => ({
    ...state,
    logged: action.payload,
  }));
});
