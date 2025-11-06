
export interface UserType {
  access_token: string  | null
  username: string | null
  email: string | null
  is_superuser: boolean
  permissions: {
  manage_products: boolean
  view_qr: boolean
  view_costs: boolean
  manage_servers: boolean
  manage_bots: boolean
  manage_users: boolean
  }
  user_id: string | null
}

export interface LoginType {
  username: string | null
  password: string | null
}

export interface LoginDto {
  access_token: string
  user_id: string 
}

export interface ProfileSlicetype {
  user: UserType 
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  Login: (loginData: LoginType, navigate: (path: string) => void) => Promise<void>
  GetProfile: (id: string, token: string) => Promise<void>
  Logout: ()=> void
}

export interface UserTableType  {
  access_token: string  | null
  username: string | null
  email: string | null
  is_superuser: boolean
  permissions: []
  user_id: string | null
}



export type UserStore = ProfileSlicetype

    // manage_servers: boolean
    // manage_bots: boolean