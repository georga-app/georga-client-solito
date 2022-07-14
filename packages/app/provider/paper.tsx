import { MD3LightTheme as DefaultTheme, Provider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
  },
};

export function PaperProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  )
}
