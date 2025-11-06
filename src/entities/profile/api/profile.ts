import { axiosInstance } from "@shared/config/api/axiosInstance"
import { UserType } from "../model/type"
import { API_PATHS } from "@shared/config/api/path"

export const getProfileApi = async (id:string, token: string): Promise<UserType> => {
  const { data } = await axiosInstance.get<UserType>(API_PATHS.USERS.ID(id),{
    headers: {
      Authorization: `Bearer ${token}`
    }
  } )
  return data
}