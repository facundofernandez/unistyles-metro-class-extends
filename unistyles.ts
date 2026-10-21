import { StyleSheet } from 'react-native-unistyles';

const light = {
  colors: { background: '#ffffff', text: '#111111', accent: '#2563eb' },
};

const dark = {
  colors: { background: '#111111', text: '#ffffff', accent: '#60a5fa' },
};

type AppThemes = { light: typeof light; dark: typeof dark };

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: { light, dark },
  settings: { initialTheme: 'light' },
});
