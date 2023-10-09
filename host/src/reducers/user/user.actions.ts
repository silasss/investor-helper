import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user.interface";
import { UserService } from "./user.service";

export const fetchUserLogged = createAsyncThunk<User | null>(
  "user/fetchUserLogged",
  UserService.getLoggedUser
);
