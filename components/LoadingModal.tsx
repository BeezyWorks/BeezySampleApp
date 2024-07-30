// LoadingModal.tsx
import {ThemedColors} from '@/theme/constants/Colors'
import {useThemeColor} from '@/theme/hooks/useThemeColor'
import React from 'react'
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native'
import Modal from 'react-native-modal'

interface LoadingModalProps {
  isVisible: boolean
  message?: string
}

export const LoadingModal = ({isVisible, message}: LoadingModalProps) => {
  const backgroundColor = useThemeColor({themedColor: ThemedColors.Background})
  const indicatorColor = useThemeColor({themedColor: ThemedColors.Text})
  
  return (
    <Modal
      isVisible={isVisible}
      backdropColor={ThemedColors.Background}
      backdropOpacity={0.5}
    >
      <View style={styles.modalContent}>
        <ActivityIndicator size="large" color={indicatorColor} />
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
  },
  message: {
    marginTop: 10,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
})
