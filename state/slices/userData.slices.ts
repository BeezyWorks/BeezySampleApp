import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserDataState {
  credentials?: string
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {} as UserDataState,
  reducers: {
    setCredentials: (state: UserDataState, action: PayloadAction<string>) => {
      state.credentials = action.payload
    },
    logout: (state: UserDataState) => {
      state.credentials = undefined
    },
  },
})

export const {setCredentials, logout} = userDataSlice.actions
export const UserDataReducer = userDataSlice.reducer
