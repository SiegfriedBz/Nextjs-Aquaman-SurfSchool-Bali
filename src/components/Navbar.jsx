import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import NavLinks from './NavLinks'
import ButtonToggleTheme from './ButtonToggleTheme'
import ButtonMobileBurger from './ButtonMobileBurger'
import Modal from './Modal'

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <>
      <div className='navbar layout-gradient relative'>
        <div className='container flex h-full flex-col justify-center'>
          <Logo />

          {/* mobile & desktop */}
          <Link
            id='brand-link'
            className='dark-white-link absolute left-16 top-1/2 inline-block w-1/2 -translate-y-1/2 xs:w-1/3 sm:left-24 sm:w-1/4 xl:w-1/6'
            href='/'
          >
            <h5 className='text-gradient mb-0 w-full whitespace-nowrap font-bold italic'>
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

      {/* mobile: backdrop & menu */}
      {mobileMenuIsOpen && (
        <Modal
          mobileMenuIsOpen={mobileMenuIsOpen}
          setMobileMenuIsOpen={setMobileMenuIsOpen}
          className={mobileMenuIsOpen ? 'z-[999]' : 'z-0'}
        >
          <div className='w-full py-1'>
            <NavLinks modal={true} />
          </div>
        </Modal>
      )}
    </>
  )
}

export default Navbar
