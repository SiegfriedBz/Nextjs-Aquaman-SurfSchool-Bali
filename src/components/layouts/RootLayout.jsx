import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AppContextProvider } from '@/context/appContext'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  return (
    <AppContextProvider>
      <div className={`min-h-screen ${inter.className}`}>
        <Header />
        <main className={`container px-2 sm:px-0`}>{children}</main>
        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default RootLayout
