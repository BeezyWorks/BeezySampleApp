import { RootState } from '@/state'
import {createSelector} from '@reduxjs/toolkit'

export const getUserDataState = (state: RootState) => state.userData

export const getUserCredentials = createSelector(
  getUserDataState,
  ({credentials}) => credentials,
)
