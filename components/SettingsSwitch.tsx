import React from 'react'
import {Switch, StyleSheet, Touchable} from 'react-native'
import {RootState} from '../state/index'
import {useDispatch, useSelector} from 'react-redux'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {TouchableOpacity} from 'react-native-gesture-handler'

interface Props {
  title: string
  selector: (state: RootState) => boolean
  toggle: (newValue: boolean) => {type: string; payload: boolean}
}

export const SettingsSwitch = ({title, selector, toggle}: Props) => {
  const value = useSelector(selector)
  const dispatch = useDispatch()

  const onSwitch = (newValue: boolean) => {
    dispatch(toggle(newValue))
  }

  return (
    <TouchableOpacity onPress={() => onSwitch(!value)}>
      <ThemedView style={styles.settingItem}>
        <ThemedText style={styles.settingText}>{title}</ThemedText>
        <Switch value={value} onValueChange={onSwitch} />
      </ThemedView>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 16,
  },
})
