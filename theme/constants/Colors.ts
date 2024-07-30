const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

export const ThemedColors = {
  Text: 'text',
  Background: 'background',
  Tint: 'tint',
  Icon: 'icon',
  TabIconDefault: 'tabIconDefault',
  TabIconSelected: 'tabIconSelected',
} as const
export type ThemedColors = (typeof ThemedColors)[keyof typeof ThemedColors]

export const ColorTheme = {
  Light: 'light',
  Dark: 'dark',
} as const
export type ColorTheme = (typeof ColorTheme)[keyof typeof ColorTheme]

export const Colors: Record<ColorTheme, Record<ThemedColors, string>> = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
} as const
