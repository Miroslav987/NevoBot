// src/entities/user/model/usersSlice.ts
import { addUserApi, getUsersApi } from '../api/users'
import { logError } from '@shared/utils/logger'
import { UserSlicetype } from './type'

type SetStateFn = (state: Partial<UserSlicetype> | ((prev: Partial<UserSlicetype>) => Partial<UserSlicetype>)) => void;
// type GetStateFn = () => Partial<UserSlicetype>;
// get: GetStateFn-------------------------------↓
export const createUsersSlice = (set: SetStateFn, ): Partial<UserSlicetype> => ({
  users: null,
  isLoading: false,
  isSuccess: false,
  isError: false,

  GetUsers: async (token: string) => {
    set({ isLoading: true })
    try {
      const users = await getUsersApi(token)
      console.log(users); 
      
      set({
        users: Array.isArray(users) ? users : [users],
        isLoading: false,
        isSuccess: true,
      })
    } catch (err) {
      logError(err)
      set({ isLoading: false, isError: true })
    }
  },
  
  AddUser: async (obj:object,token: string) => {
    set({ isLoading: true })
    try {
      await addUserApi(obj ,token)
      const users = await getUsersApi(token)
      set({
        users: Array.isArray(users) ? users : [users],
        isLoading: false,
        isSuccess: true,
      })
    } catch (err) {
      logError(err)
      set({ isLoading: false, isError: true })
    }
  },
})

// export const createUsersSlice = (set: (state: Partial<UserSlicetype>) => void): Partial<UserSlicetype> => ({