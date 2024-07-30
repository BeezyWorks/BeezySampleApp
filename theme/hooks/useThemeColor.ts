import {Colors, ThemedColors} from '@/theme/constants/Colors'
import {useColorScheme} from '@/theme/hooks/useColorScheme'
import {ThemeColorOverrides} from '@/theme/themeTypes'

interface ThemedColorArgs {
  overrides?: Partial<ThemeColorOverrides>
  themedColor: ThemedColors
}

interface OverrideArgs {
  overrides: ThemeColorOverrides
}

const isThemedColorArgs = (
  args: ThemedColorArgs | OverrideArgs,
): args is ThemedColorArgs => {
  return 'themedColor' in args
}

export const useThemeColor = (args: ThemedColorArgs | OverrideArgs) => {
  const theme = useColorScheme()
  console.log({theme})

  if (isThemedColorArgs(args)) {
    if (args.overrides && args.overrides[theme]) {
      return args.overrides[theme]
    }
    return Colors[theme][args.themedColor]
  } else {
    return args.overrides[theme]
  }
}
