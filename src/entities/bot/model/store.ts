import { create } from 'zustand'
import { BotSliceType, createBotSlice } from './useBotSlice'

export const useBotSlice = create<BotSliceType>((set, get, api) => ({

  ...createBotSlice(set, get, api),



} as BotSliceType))
