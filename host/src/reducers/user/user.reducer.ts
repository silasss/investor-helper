import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../models/interfaces/user.interface';
import { fetchUserLogged } from './user.actions';

interface UserState {
  logged: User | null;
}

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
