// screens/SettingsScreen.tsx

import BottomSheetSelector, {
  RadioOption,
} from '@/components/BottomSheetSelector'
import {SettingsSwitch} from '@/components/SettingsSwitch'
import {ThemedView} from '@/components/ThemedView'
import {
  getFoobarEnabled,
  getUserTheme,
} from '@/state/selectors/userPrefs.selector'
import {
  setFooBarEnabled,
  UserPrefColorTheme,
  setTheme,
} from '@/state/slices/userPrefs.slices'
import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

const ThemeOptionLabels: Record<UserPrefColorTheme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
}

const themeOptions: RadioOption<UserPrefColorTheme>[] = Object.values(
  UserPrefColorTheme,
).map((theme) => ({
  label: ThemeOptionLabels[theme],
  id: theme,
}))

const SettingsScreen: React.FC = () => {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState<boolean>(false)
  const userColorTheme = useSelector(getUserTheme)
  const dispatch = useDispatch()

  const setColorTheme = ({id}: RadioOption<UserPrefColorTheme>) => {
    dispatch(setTheme(id))
  }

  return (
    <ThemedView style={styles.container}>
      <SettingsSwitch
        title="Enable Foobar"
        selector={getFoobarEnabled}
        toggle={setFooBarEnabled}
      />
      <BottomSheetSelector
        sheetTitle="Select Color Theme"
        options={themeOptions}
        onSelectOption={setColorTheme}
        selectedOption={themeOptions.find(({id}) => id === userColorTheme)}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

export default SettingsScreen
