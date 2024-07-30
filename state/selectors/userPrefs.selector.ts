import {RootState} from '@/state'
import {createSelector} from '@reduxjs/toolkit'

export const getUserPrefsState = (state: RootState) => state.userPrefs

export const getUserTheme = createSelector(
  [getUserPrefsState],
  ({theme}) => theme,
)

export const getFoobarEnabled = createSelector(
  [getUserPrefsState],
  ({fooBarEnabled}) => !!fooBarEnabled,
)
