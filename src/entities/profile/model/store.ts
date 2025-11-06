
import { create } from 'zustand'
import { UserStore } from './type'
import { createLoginSlice } from './loginSlice'
import { createProfileSlice } from './profileSlice'

export const useProfileStore = create<UserStore>((set) => ({
  ...createLoginSlice(set),
  ...createProfileSlice(set),
} as UserStore))
