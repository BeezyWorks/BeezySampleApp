import {ColorTheme} from '@/theme/constants/Colors'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const UserPrefColorTheme = {...ColorTheme, System: 'system'} as const
export type UserPrefColorTheme =
  (typeof UserPrefColorTheme)[keyof typeof UserPrefColorTheme]

interface UserPrefsState {
  theme: UserPrefColorTheme
  fooBarEnabled?: boolean
}

const initialState: UserPrefsState = {
  theme: ColorTheme.Light,
}

const userPrefsSlice = createSlice({
  name: 'userPrefs',
  initialState,
  reducers: {
    setTheme: (
      state: UserPrefsState,
      action: PayloadAction<UserPrefColorTheme>,
    ) => {
      state.theme = action.payload
    },
    setFooBarEnabled: (
      state: UserPrefsState,
      action: PayloadAction<boolean>,
    ) => {
      state.fooBarEnabled = action.payload
    },
  },
})

export const {setTheme, setFooBarEnabled} = userPrefsSlice.actions
export const UserPrefsReducer = userPrefsSlice.reducer
