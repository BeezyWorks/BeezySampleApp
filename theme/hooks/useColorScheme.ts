import {getUserTheme} from '@/state/selectors/userPrefs.selector'
import {ColorTheme} from '@/theme/constants/Colors'
import {useColorScheme as usePlatformColorScheme} from 'react-native'
import {useSelector} from 'react-redux'

export const useColorScheme = (): ColorTheme => {
  const userTheme = useSelector(getUserTheme)
  const systemTheme = usePlatformColorScheme() ?? 'light'
  return userTheme === 'system' ? systemTheme : userTheme
}
