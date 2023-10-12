export interface User {
  id: string;
  name: string;
}

export interface UserState {
  logged: User | null;
}
