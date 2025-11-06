// src/entities/users/model/userSlice.ts
import { create } from 'zustand'
import { createUsersSlice } from './usersSlice'
import { UserSlicetype } from './type'
export const useUsersStore= create<UserSlicetype>()((set) => ({
  ...createUsersSlice(set),

}as UserSlicetype))
