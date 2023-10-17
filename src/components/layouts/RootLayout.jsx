import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AppContextProvider } from '@/context/appContext'

const RootLayout = ({ children }) => {
  return (
    <AppContextProvider>
      <div className='min-h-screen'>
        <Header />
        <main className={`container px-2 sm:px-0`}>{children}</main>
        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default RootLayout
