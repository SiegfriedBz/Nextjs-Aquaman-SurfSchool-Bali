import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import NavLinks from './NavLinks'
import ButtonToggleTheme from './ButtonToggleTheme'
import ButtonMobileBurger from './ButtonMobileBurger'

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <div className='navbar relative'>
      <div className='container flex h-full flex-col justify-center'>
        <Logo />

        {/* mobile & desktop */}
        <Link
          id='brand-link'
          className='base-link absolute left-16 top-1/2 w-1/3 -translate-y-1/2 sm:left-24 sm:w-1/4'
          href='/'
        >
          <h5 className='text-gradient mb-0 font-extrabold italic'>
            Aquaman Bali
          </h5>
        </Link>

        <div
          id='responsive-nav'
          className='flex items-center justify-end space-x-4 lg:space-x-6'
        >
          <ButtonToggleTheme />

          {/* desktop */}
          <nav id='desktop-nav-links' className='hidden sm:inline-block'>
            <NavLinks />
          </nav>

          {/* mobile */}
          <span className='2xl:hidden'>
            <ButtonMobileBurger
              mobileMenuIsOpen={mobileMenuIsOpen}
              setMobileMenuIsOpen={setMobileMenuIsOpen}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
