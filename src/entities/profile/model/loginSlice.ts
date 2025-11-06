
import Cookies from 'js-cookie'
import { settingCook } from '@shared/config/cookies/cookies'
import { logError } from '@shared/utils/logger'
import { LoginDto, LoginType, ProfileSlicetype, UserType } from './type'
import { LoginApi } from '../api/auth'
import { initialUser } from '@shared/utils/getUserFromCookies'
import { RouterPath } from '@shared/routing/path'
import { getProfileApi } from '../api/profile'

export const createLoginSlice = (set: (state: Partial<ProfileSlicetype>) => void): Partial<ProfileSlicetype> => ({
  user: initialUser,
  isLoading: false,
  isSuccess: false,
  isError: false,

  Login: async (loginData: LoginType, navigate: (path: string) => void) => {
    set({ isLoading: true, isSuccess: false, isError: false })
    try {
      const login: LoginDto = await LoginApi(loginData)
      Cookies.set('access_token', login.access_token, settingCook)
      Cookies.set('user_id', String(login.user_id), settingCook)

      const user: UserType = await getProfileApi(login.user_id!, login.access_token)

      Cookies.set('username', user.username || '', settingCook)
      Cookies.set('email', user.email || '', settingCook)
      Cookies.set('is_superuser', String(user.is_superuser), settingCook)
      Cookies.set('manage_servers', String(user.permissions.manage_servers), settingCook)
      Cookies.set('manage_bots', String(user.permissions.manage_bots), settingCook)


      Cookies.set('access_token', 'erferferferf', settingCook)
      Cookies.set('user_id', 'ererr', settingCook)
      Cookies.set('username', 'Miro', settingCook)
      Cookies.set('email', 'Mouyyufufyy', settingCook)
      set({
        user: {
          access_token: login.access_token,
          user_id: login.user_id,
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
      navigate(RouterPath.ROOT)
    } catch (err) {
      logError(err)
      set({ isLoading: false, isError: true })
    }
  },

  Logout: () => {
    Cookies.remove('access_token')
    Cookies.remove('username')
    Cookies.remove('email')
    Cookies.remove('is_superuser')
    Cookies.remove('user_id')
    Cookies.remove('manage_servers')
    Cookies.remove('manage_bots')
    set({
      user: initialUser,
      isLoading: false,
      isSuccess: false,
      isError: false,
    })
    window.location.href = '/login'
  },
})
