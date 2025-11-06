import { axiosInstance } from "@shared/config/api/axiosInstance"
import { API_PATHS } from "@shared/config/api/path"
import { BotType } from "../model/type"


export const AddBot = async (obj:BotType,token:string ) => {
  const { data } = await axiosInstance.post(API_PATHS.BOTS.ROOT,obj,{
    headers: {
      Authorization: `Bearer ${token}`,"Content-Type": "application/json",
    }
  } )
  return data
}