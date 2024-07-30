// components/BottomSheetSelector.tsx

import React, {useRef, useMemo} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'

export interface RadioOption<T extends string | number> {
  id: T
  label: string
}

interface Props<T extends string | number> {
  options: RadioOption<T>[]
  selectedOption?: RadioOption<T>
  onSelectOption: (option: RadioOption<T>) => void
  sheetTitle?: string
}

const BottomSheetSelector = <T extends string | number>({
  options,
  selectedOption,
  onSelectOption,
  sheetTitle = 'Select an Option',
}: Props<T>) => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => ['25%', '50%'], [])

  const handleSelectOption = (option: RadioOption<T>) => {
    onSelectOption(option)
    bottomSheetRef.current?.close() // Close the bottom sheet after selection
  }

  return (
    <>
      <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 16,
          }}
        >
          <ThemedText type="subtitle">{sheetTitle}</ThemedText>
          <ThemedText type="subtitle">
            {selectedOption ? selectedOption.label : 'Select Option'}
          </ThemedText>
        </View>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Start closed
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>{sheetTitle}</Text>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionItem}
              onPress={() => handleSelectOption(option)}
            >
              <Text style={styles.optionText}>
                {selectedOption?.id === option.id ? '✓ ' : ''}
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  sheetContent: {
    flex: 1,
    padding: 16,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
})

export default BottomSheetSelector
