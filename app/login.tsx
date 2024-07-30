// src/LoginScreen.tsx

import {LoadingModal} from '@/components/LoadingModal'
import {setCredentials} from '@/state/slices/userData.slices'
import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native'
import {useDispatch} from 'react-redux'

// Define a functional component for the login screen
const LoginScreen = () => {
  // State to hold username and password input
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()

  // Handle login button press
  const handleLogin = () => {
    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both username and password')
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      dispatch(setCredentials(username))
    }, 1500)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      <LoadingModal isVisible={loading} />
    </View>
  )
}

export default LoginScreen

// Styles for the login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
})
