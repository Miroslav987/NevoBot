

import { logError } from '@shared/utils/logger'
import { ProfileSlicetype, UserType } from './type'
import { getUserFromCookies } from '@shared/utils/getUserFromCookies'
import Cookies from 'js-cookie'
import { settingCook } from '@shared/config/cookies/cookies'
import { getProfileApi } from '../api/profile'



export const createProfileSlice = (set: (state: Partial<ProfileSlicetype>) => void): Partial<ProfileSlicetype> => ({
  user: getUserFromCookies(),
  isLoading: false,
  isSuccess: false,
  isError: false,

  GetProfile: async (id: string, token: string) => {
    set({ isLoading: true })
    try {
      const user: UserType = await getProfileApi(id, token)
      Cookies.set('access_token', user.access_token || '', settingCook)
      Cookies.set('user_id', user.user_id || '', settingCook)
      Cookies.set('username', user.username || '', settingCook)
      Cookies.set('email', user.email || '', settingCook)
      Cookies.set('is_superuser', String(user.is_superuser), settingCook)
      Cookies.set('manage_servers', String(user.permissions.manage_servers), settingCook)
      Cookies.set('manage_bots', String(user.permissions.manage_bots), settingCook)

      set({
        user: {
          access_token: user.access_token,
          user_id: user.user_id,
          username: user.username,
          email: user.email,
          is_superuser: user.is_superuser,
          permissions: {
            manage_bots: user.permissions.manage_bots,
            manage_servers: user.permissions.manage_servers,
            manage_products: user.permissions.manage_products,
            view_qr: user.permissions.view_qr,
            view_costs: user.permissions.view_costs,
            manage_users: user.permissions.manage_users,
          }

        }
        , isLoading: false, isSuccess: true
      })
    } catch (err) {
      logError(err)
      set({ isLoading: false, isError: true })
    }
  },
})
