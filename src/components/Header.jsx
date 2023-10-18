import { useRouter } from 'next/router'
import Navbar from './Navbar'
import { BorderBottomGradient } from './BorderGradient'

const Header = () => {
  const router = useRouter()
  const isHomePage =
    router.asPath.endsWith('/') ||
    router.asPath.endsWith('/#school-carousel') ||
    router.asPath.endsWith('/#about-me') ||
    router.asPath.endsWith('/#testimonials') ||
    router.asPath.endsWith('/#home-map')

  return (
    <header
      id='header'
      className={`fixed left-0 right-0 top-0 z-[999] 
       ${isHomePage ? 'home-navTop' : ''}`}
    >
      <BorderBottomGradient>
        <Navbar />
      </BorderBottomGradient>
    </header>
  )
}

export default Header
