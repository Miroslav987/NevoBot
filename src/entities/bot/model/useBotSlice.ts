import { logError } from "@shared/utils/logger"
import { AddBot } from "../api"
import { BotType } from "./type"
import { StateCreator } from "zustand"


export type BotSliceType = {
  bot: BotType,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
  AddBot: (obj: BotType, token: string)=> Promise<void>
}

const bot:BotType = {
  name: "",
  image: '',
  bot_url: '',
  port: 0,
  server_id: 0,
  env_vars: {},
}


export const createBotSlice: StateCreator<BotSliceType> = (set) => ({
  bot: bot,
  isLoading: false,
  isSuccess: false,
  isError: false,

  AddBot: async (obj, token) => {
    set({ isLoading: true, isSuccess: false, isError: false })
    try {
      console.log("Запрос на добавление бота:", obj);
      console.log("Токен:", token);
      const { data } = await AddBot(obj, token)
      console.log(data);

    } catch (err: any) {
      logError(err)
      if (err.response) {
        console.log("Ошибка от сервера:", err.response.data)
      }
      console.log("Ошибка от сервера:", err.response.data)
      set({ isLoading: false, isError: true })
    }
  },


})
