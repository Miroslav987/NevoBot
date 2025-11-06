
import { axiosInstance } from "@shared/config/api/axiosInstance"
import { LoginDto, LoginType } from "../model/type"
import * as qs from 'qs';
import { API_PATHS } from "@shared/config/api/path"


export const LoginApi = async (obj: LoginType,): Promise<LoginDto> => {
  const { data } = await axiosInstance.post(API_PATHS.AUTH.LOGIN, qs.stringify(obj), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
  return data
}