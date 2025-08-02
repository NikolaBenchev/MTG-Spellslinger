export interface UserModel {
  uuid: string,
  username: string,
  displayName: string,
  settings: {}, // TODO: decide what's gonna be stored in settings and update the model
  roleUuid: string,
}

export interface UsersStateModel {
  pagination: {
    totalCount: number | null,
    limit: number | null,
    page: number | null,
  },
  list: UserModel[],
  isLoading: boolean,
}
