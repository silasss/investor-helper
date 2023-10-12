import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'shared';
import { UserService } from './user.service';

export const fetchUserLogged = createAsyncThunk<User | null>(
  'user/fetchUserLogged',
  UserService.getLoggedUser,
);
