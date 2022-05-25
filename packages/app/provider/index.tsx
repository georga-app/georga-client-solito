import { Dripsy } from './dripsy'
import { PaperProvider } from './paper'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <PaperProvider>
        <Dripsy>{children}</Dripsy>
      </PaperProvider>
    </NavigationProvider>
  )
}
