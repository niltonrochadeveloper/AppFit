
import { Platform } from 'react-native';
import { lightColors, darkColors } from '@rneui/themed';

export const DarkColors = {
  ...Platform.select({
    default: darkColors.platform.android,
    ios: darkColors.platform.ios,
  }),
  primary: '#ffffff',
}

export const LightColors = {
  ...Platform.select({
    default: lightColors.platform.android,
    ios: lightColors.platform.ios,
  }),
  primary: '#141414',
}

export const FontSizes = {
  'xs': 12,
  'sm': 14,
  'md': 16,
  'lg': 18,
  'xl': 20,
};

export const Spacings = {
  'xs': 12,
  'sm': 14,
  'md': 16,
  'lg': 18,
  'xl': 20,
};