import Link from 'next/link'
import {
  CoffeeIconLink,
  IgIconLink,
  StreetViewIconLink,
  TiktokIconLink,
  WhatsappIconLink,
} from './Icons'

const NavLinks = ({ className = '', modal = false }) => {
  return (
    <ul
      className={`${
        modal ? 'flex-col' : 'justify-end space-x-4 lg:space-x-6'
      } flex h-full w-full items-center ${className}`}
    >
      <li className={modal ? '' : 'hidden md:inline-block'}>
        <Link href='/surf-lessons'>
          <span
            className={`text-gradient my-2 inline-block ${
              modal ? 'text-3xl font-extrabold' : 'span-link'
            }`}
          >
            Surf Lessons
          </span>
        </Link>
      </li>
      <li className={modal ? '' : 'hidden lg:inline-block'}>
        <Link href='/surf-trips'>
          <span
            className={`text-gradient my-2 inline-block ${
              modal ? 'text-3xl font-extrabold' : 'span-link'
            }`}
          >
            Surf Trips
          </span>
        </Link>
      </li>
      <li className={modal ? '' : 'hidden xl:inline-block'}>
        <Link href='/photo-video'>
          <span
            className={`text-gradient my-2 inline-block ${
              modal ? 'text-3xl font-extrabold' : 'span-link'
            }`}
          >
            Photo & Video
          </span>
        </Link>
      </li>
      <li className={modal ? '' : 'hidden xl:inline-block'}>
        <Link href='/gallery'>
          <span
            className={`text-gradient my-2 inline-block ${
              modal ? 'text-3xl font-extrabold' : 'span-link'
            }`}
          >
            Gallery
          </span>
        </Link>
      </li>
      <li className={modal ? '' : 'hidden 2xl:inline-block'}>
        <Link href='/about-me'>
          <span
            className={`text-gradient my-2 inline-block ${
              modal ? 'text-3xl font-extrabold' : 'span-link'
            }`}
          >
            About me
          </span>
        </Link>
      </li>
      <li className={modal ? '' : 'hidden md:inline-block'}>
        <Link href='/#home-testimonials'>
          <span
            className={`text-gradient my-2 inline-block ${
              modal ? 'text-3xl font-extrabold' : 'span-link'
            }`}
          >
            Testimonials
          </span>
        </Link>
      </li>
      <span
        className={`${
          modal ? 'mb-4 mt-6 inline-flex w-[19rem] justify-between' : ''
        } inline-flex items-center justify-end space-x-4 lg:space-x-6`}
      >
        <li>
          <StreetViewIconLink className={modal ? 'text-[3rem]' : ''} />
        </li>
        <li className={modal ? '' : 'hidden 2xl:inline-block'}>
          <CoffeeIconLink className={modal ? 'text-[3rem]' : ''} />
        </li>
        <li className={modal ? '' : 'hidden 2xl:inline-block'}>
          <TiktokIconLink className={modal ? 'h-12 w-12' : ''} />
        </li>
        <li className={modal ? '' : 'hidden xl:inline-block'}>
          <IgIconLink className={modal ? 'text-[3rem]' : ''} />
        </li>
        <li>
          <WhatsappIconLink className={modal ? 'text-[3rem]' : ''} />
        </li>
      </span>
    </ul>
  )
}

export default NavLinks
