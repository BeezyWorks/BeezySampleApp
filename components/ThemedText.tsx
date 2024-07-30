import {ThemedColors} from '@/theme/constants/Colors'
import {useThemeColor} from '@/theme/hooks/useThemeColor'
import {ThemeColorOverrides} from '@/theme/themeTypes'
import {Text, type TextProps, StyleSheet} from 'react-native'

export const ThemedTextType = {
  Default: 'default',
  Title: 'title',
  DefaultSemiBold: 'defaultSemiBold',
  Subtitle: 'subtitle',
  Link: 'link',
} as const
export type ThemedTextType =
  (typeof ThemedTextType)[keyof typeof ThemedTextType]

export type ThemedTextProps = TextProps & {
  type?: ThemedTextType
  themedColorOverride?: ThemeColorOverrides
}
export function ThemedText({
  style,
  themedColorOverride,
  type = ThemedTextType.Default,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({
    overrides: themedColorOverride,
    themedColor: ThemedColors.Text,
  })

  return (
    <Text
      style={[
        {color},
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
})
