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
          className='relative flex flex-row justify-between'
        >
          {/* contact */}
          <div
            id='footer-contact'
            className='flex-start flex flex-col items-start
                  md:py-5 md:text-xl'
          >
            <address>
              <h5 className='text-gradient font-bold'>Aquaman Bali</h5>
              Batu Bolong, Canggu
              <br />
              <a
                href='mailto:rendy280720@gmail.com?subject=Inquiry About Surf Lessons and Surf Trips 🏄‍♂️🌊'
                target='_blank'
                className='base-link inline-block py-1
                      hover:text-cf-dark/95
                      dark:hover:text-cf-white/90
                        md:py-4 md:text-xl'
              >
                rendy280720@gmail.com
              </a>
              <br />
              <a
                href='tel:+6282289427321'
                target='_blank'
                className='base-link inline-block
                      hover:text-cf-dark/95
                      dark:hover:text-cf-white/90
                        md:text-xl'
              >
                (+62) 822-8942-7321
              </a>
            </address>
          </div>

          {/* desktop links */}
          <ul
            id='footer-links'
            className='relative top-2 hidden flex-col items-center space-y-2 sm:flex md:top-[0.75rem] lg:absolute lg:left-1/2 lg:-translate-x-1/2'
          >
            <li>
              <Link href='#'>
                <span className='text-gradient sm:text-lg md:text-xl'>
                  Surf Lessons
                </span>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <span className='text-gradient sm:text-lg md:text-xl'>
                  Surf Trips
                </span>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <span className='text-gradient sm:text-lg md:text-xl'>
                  Photo & Video
                </span>
              </Link>
            </li>
            <li className='hidden md:inline-block'>
              <Link href='#'>
                <span className='text-gradient text-xl'>Gallery</span>
              </Link>
            </li>
            <li className='mb-0 hidden pb-0 md:inline-block'>
              <Link href='#'>
                <span className='text-gradient text-xl'>About me</span>
              </Link>
            </li>
          </ul>

          {/* icons */}
          <div
            id='footer-icons'
            className='my-auto flex flex-col items-center md:gap-6'
          >
            <div className='flex items-center justify-between md:gap-6'>
              <TiktokIconLink className='px-1 py-1' />
              <WhatsappIconLink className='px-2 py-1' />
            </div>

            <div className='flex items-center justify-between md:gap-6'>
              <IgIconLink className='px-2 pt-1' />
              <CoffeeIconLink className='py-2 pe-2 ps-3' />
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
              <span className='text-gradient sm:text-lg md:text-xl'>
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
