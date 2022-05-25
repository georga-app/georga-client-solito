import { Provider } from 'react-native-paper';

export function PaperProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}
