
import { UserType } from '@entities/profile/model/type'
import Cookies from 'js-cookie'


export const initialUser: UserType = {
    access_token: null,
    username: null,
    email: null,
    is_superuser: false,
    permissions: {
        manage_servers: false,
        manage_bots: false,
        manage_products: false,
        view_qr: false,
        view_costs: false,
        manage_users: false,
    },
    user_id: null,



}

const parseBoolean = (value: string | undefined): boolean => {
    if (!value) return false
    return value === 'true'
}


export const getUserFromCookies = (): UserType => {
    const access_token = Cookies.get('access_token')
    const username = Cookies.get('username')
    const email = Cookies.get('email')
    const is_superuser = Cookies.get('is_superuser')
    const manage_servers = Cookies.get('manage_servers')
    const manage_bots = Cookies.get('manage_bots')
    const manage_products = Cookies.get('manage_servers')
    const view_qr = Cookies.get('manage_servers')
    const view_costs = Cookies.get('manage_servers')
    const manage_users = Cookies.get('manage_servers')
    const user_id = Cookies.get('user_id')

    // if (!access_token || !user_id) return null

    return {
        access_token: access_token || null,
        username: username || null,
        email: email || null,
        is_superuser: parseBoolean(is_superuser),
        permissions: {
            manage_servers: parseBoolean(manage_servers),
            manage_bots: parseBoolean(manage_bots),
            manage_products: parseBoolean(manage_products),
            view_qr: parseBoolean(view_qr),
            view_costs: parseBoolean(view_costs),
            manage_users: parseBoolean(manage_users),
        },
        user_id: user_id || null,
    }
}
