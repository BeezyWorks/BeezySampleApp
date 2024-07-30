import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import {Stack} from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import {useEffect} from 'react'
import 'react-native-reanimated'
import {Provider as ReduxProvider, useSelector} from 'react-redux'
import store from '../state/index'
import {useColorScheme} from '@/theme/hooks/useColorScheme'
import {getUserCredentials} from '@/state/selectors/userData.selector'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ReduxProvider store={store}>
        <Navigator />
      </ReduxProvider>
    </GestureHandlerRootView>
  )
}

const Navigator = () => {
  const colorScheme = useColorScheme()
  const credentials = useSelector(getUserCredentials)
  console.log({credentials})
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {!credentials && (
        <Stack>
          <Stack.Screen name="login" options={{headerTitle: 'Login'}} />
        </Stack>
      )}
      {credentials && (
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
          <Stack.Screen name="+not-found" />
        </Stack>
      )}
    </ThemeProvider>
  )
}
