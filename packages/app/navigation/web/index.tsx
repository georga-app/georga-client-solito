import Header from './header'
import Footer from './footer'

export function WebNavigation({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
