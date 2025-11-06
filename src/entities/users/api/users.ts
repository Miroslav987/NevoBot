
import { axiosInstance } from "@shared/config/api/axiosInstance"
import { API_PATHS } from "@shared/config/api/path"
import { UserType } from "../../profile/model/type"


export const addUserApi = async (obj:object, token: string): Promise<UserType> => {
  const { data } = await axiosInstance.post<UserType>(API_PATHS.USERS.ROOT,obj,{
    headers: {
      Authorization: `Bearer ${token}`,"Content-Type": "application/json",
    }
  } )
  return data
}
export const getUsersApi = async ( token: string): Promise<UserType> => {
  const { data } = await axiosInstance.get<UserType>(API_PATHS.USERS.ROOT,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  } )
  return data
}
