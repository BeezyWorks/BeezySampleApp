// store.ts
import {configureStore} from '@reduxjs/toolkit'
import {UserDataReducer} from './slices/userData.slices'
import {UserPrefsReducer} from '@/state/slices/userPrefs.slices'

const store = configureStore({
  reducer: {
    userData: UserDataReducer,
    userPrefs: UserPrefsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
