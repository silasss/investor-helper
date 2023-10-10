import { RootState } from "../../app/store";

export const selectUserLogged = (state: RootState) => state.user.logged;
