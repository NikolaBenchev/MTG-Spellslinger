import type { UserModel } from "./User";

export interface AuthStateModel {
  isAuthenticated: boolean;
  isLoading: boolean;
  userUuid: string | null;
  userData: null | UserModel
}
