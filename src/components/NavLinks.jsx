import Link from 'next/link'
import {
  CoffeeIconLink,
  IgIconLink,
  StreetViewIconLink,
  TiktokIconLink,
  WhatsappIconLink,
} from './Icons'

const NAV_LINKS = (modal) => [
  {
    id: 1,
    href: '/surf-lessons',
    text: 'Surf Lessons',
    className: modal ? '' : 'hidden md:inline-block',
  },
  {
    id: 2,
    href: '/surf-trips',
    text: 'Surf Trips',
    className: modal ? '' : 'hidden lg:inline-block',
  },
  {
    id: 3,
    href: '/photo-video',
    text: 'Photo & Video',
    className: modal ? '' : 'hidden xl:inline-block',
  },
  {
    id: 4,
    href: '/gallery',
    text: 'Gallery',
    className: modal ? '' : 'hidden xl:inline-block',
  },
  {
    id: 5,
    href: '/about-me',
    text: 'About me',
    className: modal ? '' : 'hidden 2xl:inline-block',
  },
  {
    id: 6,
    href: '/#visit-us',
    text: 'Visit us',
    className: modal ? '' : 'hidden 2xl:inline-block',
  },
  {
    id: 7,
    href: '/#testimonials',
    text: 'Testimonials',
    className: modal ? '' : 'hidden md:inline-block',
  },
]

const SOCIAL_LINKS = (modal) => [
  {
    id: 1,
    className: '',
    icon: <StreetViewIconLink className={modal ? 'text-[2.75rem]' : ''} />,
  },
  {
    id: 2,
    className: modal ? '' : 'hidden 2xl:inline-block',
    icon: <CoffeeIconLink className={modal ? 'text-[2.5rem]' : ''} />,
  },
  {
    id: 3,
    className: modal ? '' : 'hidden 2xl:inline-block',
    icon: <TiktokIconLink className={modal ? 'h-12 w-12' : ''} />,
  },
  {
    id: 4,
    className: modal ? '' : 'hidden xl:inline-block',
    icon: <IgIconLink className={modal ? 'text-[3rem]' : ''} />,
  },
  {
    id: 5,
    className: '',
    icon: <WhatsappIconLink className={modal ? 'text-[3rem]' : ''} />,
  },
]

const NavLinks = ({ className = '', modal = false, closeModal }) => {
  return (
    <ul
      className={`${
        modal ? 'flex-col' : 'justify-end space-x-4 lg:space-x-6'
      } flex h-full w-full items-center ${className}`}
    >
      {/* nav links */}
      {NAV_LINKS(modal)?.map((link) => {
        return (
          <Li
            key={link.id}
            href={link.href}
            className={link.className}
            modal={modal}
            closeModal={closeModal}
          >
            {link.text}
          </Li>
        )
      })}

      {/* social links */}
      <span
        className={`${
          modal ? 'mb-4 mt-6 inline-flex w-[19rem] justify-between' : ''
        } inline-flex items-center justify-end space-x-4 lg:space-x-6`}
      >
        {SOCIAL_LINKS(modal)?.map((link) => {
          return (
            <li key={link.id} className={link.className}>
              {link.icon}
            </li>
          )
        })}
      </span>
    </ul>
  )
}

export default NavLinks

const Li = ({
  className = '',
  href = '',
  modal = false,
  closeModal,
  children,
}) => {
  return (
    <li
      className={className}
      onClick={() => {
        modal && closeModal()
      }}
    >
      <Link href={href} className='underline-gradient-link'>
        <span
          className={`my-2 inline-block ${
            modal
              ? 'text-gradient text-3xl font-extrabold'
              : 'text-gradient-always-colored text-lg md:text-xl 2xl:text-[1.35rem]'
          }`}
        >
          {children}
        </span>
      </Link>
    </li>
  )
}
