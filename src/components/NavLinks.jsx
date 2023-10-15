import Link from 'next/link'
import {
  CoffeeIconLink,
  IgIconLink,
  StreetViewIconLink,
  TiktokIconLink,
  WhatsappIconLink,
} from './Icons'

const NavLinks = ({ className = 'justify-end' }) => {
  return (
    <ul
      className={`flex h-full w-full items-center space-x-4 lg:space-x-6 ${className}`}
    >
      <li className='hidden md:inline-block'>
        <Link href='/surf-lessons'>
          <h6 className='text-gradient'>Surf Lessons</h6>
        </Link>
      </li>
      <li className='hidden lg:inline-block'>
        <Link href='/surf-trips'>
          <h6 className='text-gradient'>Surf Trips</h6>
        </Link>
      </li>
      <li className='hidden xl:inline-block'>
        <Link href='/photo-video'>
          <h6 className='text-gradient'>Photo & Video</h6>
        </Link>
      </li>
      <li className='hidden xl:inline-block'>
        <Link href='/gallery'>
          <h6 className='text-gradient'>Gallery</h6>
        </Link>
      </li>
      <li className='hidden 2xl:inline-block'>
        <Link href='/about-me'>
          <h6 className='text-gradient'>About me</h6>
        </Link>
      </li>
      <li className='hidden md:inline-block'>
        <Link href='/#home-testimonials'>
          <h6 className='text-gradient'>Testimonials</h6>
        </Link>
      </li>
      <li>
        <StreetViewIconLink />
      </li>
      <li className='hidden 2xl:inline-block'>
        <CoffeeIconLink />
      </li>
      <li className='hidden 2xl:inline-block'>
        <TiktokIconLink />
      </li>
      <li className='hidden xl:inline-block'>
        <IgIconLink />
      </li>
      <li>
        <WhatsappIconLink />
      </li>
    </ul>
  )
}

export default NavLinks
