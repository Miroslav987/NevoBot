export interface settingCookState {
  expires: Date
  secure: boolean
  sameSite: "lax" | "strict" | "Strict" | "Lax" | "none" | "None"
}

const futureDate = new Date()
futureDate.setFullYear(futureDate.getFullYear() + 10)


export const settingCook: settingCookState = {
  expires: futureDate,
  secure: true,
  sameSite: 'lax',
}