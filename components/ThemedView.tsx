import {Colors, ThemedColors} from '@/theme/constants/Colors'
import {useThemeColor} from '@/theme/hooks/useThemeColor'
import {View, type ViewProps} from 'react-native'

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

export const ThemedView = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor({
    overrides: {light: lightColor, dark: darkColor},
    themedColor: ThemedColors.Background,
  })

  return <View style={[{backgroundColor}, style]} {...otherProps} />
}
