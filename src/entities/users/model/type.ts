import { UserType } from "@entities/profile/model/type"

export interface UserSlicetype {
  users: UserType [] | null
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  GetUsers: ( token: string) => Promise<void>
  AddUser: (obj:UserType, token: string) => Promise<void>
}

