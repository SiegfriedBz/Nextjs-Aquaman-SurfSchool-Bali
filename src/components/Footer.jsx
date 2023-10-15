import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { BorderTopGradient } from './BorderGradient'
import {
  CoffeeIconLink,
  IgIconLink,
  TiktokIconLink,
  WhatsappIconLink,
} from './Icons'
import swissFlag from '/public/logos/swiss-flag.svg'
import Link from 'next/link'

const bumpingVariants = {
  initial: {
    scale: 0.8,
    opacity: 1,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
}

const Footer = () => {
  const operatingHoursRef = useRef(null)
  const operatingHoursInInView = useInView(operatingHoursRef, {
    once: true,
    amount: 0.1,
  })

  return (
    <footer id='footer' className='container'>
      <BorderTopGradient
        childrenWrapperColor='layout-gradient'
        childrenWrapperExtraClasses='flex min-w-full flex-col px-2 py-6'
      >
        {/* operating hours */}
        <motion.div
          id='footer-hours'
          ref={operatingHoursRef}
          variants={bumpingVariants}
          initial='initial'
          animate={operatingHoursInInView ? 'animate' : 'initial'}
          className='mb-4 flex flex-row justify-center
              text-lg md:text-2xl'
        >
          Every day 6:00 am - 6:00 pm
        </motion.div>

        <div
          id='footer-middle-row'
          className='flex flex-row justify-between xl:relative'
        >
          {/* contact */}
          <div
            id='footer-contact'
            className='flex-start flex flex-col items-start
                  md:py-5 md:text-xl'
          >
            <address>
              <h5 className='text-gradient font-bold'>Aquaman Bali</h5>
              <Link
                href={process.env.NEXT_PUBLIC_STREETVIEW_LINK || '/'}
                className='base-link inline-block pt-1 md:text-xl'
              >
                Batu Bolong, Canggu
              </Link>
              <br />
              <a
                href='mailto:rendy280720@gmail.com?subject=Inquiry About Surf Lessons and Surf Trips 🏄‍♂️🌊'
                target='_blank'
                className='base-link inline-block py-1 md:py-4 md:text-xl'
              >
                rendy280720@gmail.com
              </a>
              <br />
              <a
                href='tel:+6282289427321'
                target='_blank'
                className='base-link md:text-xl'
              >
                (+62) 822-8942-7321
              </a>
            </address>
          </div>

          {/* desktop links */}
          <div
            id='footer-links'
            className='hidden space-x-24 sm:flex xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2'
          >
            <ul
              className='
              flex h-full flex-col
              items-center justify-center space-y-2 md:space-y-4 lg:items-start'
            >
              <li>
                <Link href='/surf-lessons'>
                  <span className='text-gradient sm:text-lg md:text-xl'>
                    Surf Lessons
                  </span>
                </Link>
              </li>
              <li>
                <Link href='/surf-trips'>
                  <span className='text-gradient sm:text-lg md:text-xl'>
                    Surf Trips
                  </span>
                </Link>
              </li>
              <li>
                <Link href='/photo-video'>
                  <span className='text-gradient sm:text-lg md:text-xl'>
                    Photo & Video
                  </span>
                </Link>
              </li>
            </ul>

            <ul
              className='
              hidden h-full flex-col items-start
              justify-center space-y-4 lg:flex'
            >
              <li className='hidden md:inline-block'>
                <Link href='/gallery'>
                  <span className='text-gradient text-xl'>Gallery</span>
                </Link>
              </li>
              <li className='mb-0 hidden pb-0 md:inline-block'>
                <Link href='/about-me'>
                  <span className='text-gradient text-xl'>About me</span>
                </Link>
              </li>
              <li className='mb-0 hidden pb-0 md:inline-block'>
                <Link href='/#home-testimonials'>
                  <span className='text-gradient text-xl'>Testimonials</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* icons */}
          <div
            id='footer-icons'
            className='my-auto flex flex-col items-center justify-between gap-4 md:gap-6'
          >
            <div className='flex w-full items-center justify-between gap-4 md:gap-6'>
              <TiktokIconLink />
              <WhatsappIconLink />
            </div>

            <div className='flex w-full items-center justify-between gap-4 md:gap-6'>
              <IgIconLink />
              <CoffeeIconLink />
            </div>
          </div>
        </div>

        {/* credits */}
        <div id='footer-credits'>
          <h2 className='mt-5 text-center text-sm text-cf-dark dark:text-cf-white'>
            <span>
              &copy;{new Date().getFullYear()} Aquaman Bali All Rights Reserved.
            </span>
          </h2>

          <div className='mb-0 flex w-full flex-row items-center justify-center'>
            <Image
              src={swissFlag}
              alt='Swiss Flag'
              width={16}
              height={16}
              className='rounded-full'
            />
            <span className='mx-2'>Swiss-made by</span>
            <a
              href={process.env.NEXT_PUBLIC_AUTHOR_WHATSAPP_LINK || '/'}
              target='_blank'
            >
              <span className='text-gradient font-bold sm:text-lg md:text-xl'>
                SiegfriedB
              </span>
            </a>
          </div>
        </div>
      </BorderTopGradient>
    </footer>
  )
}

export default Footer
