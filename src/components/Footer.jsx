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
      <BorderTopGradient>
        <div className='flex min-w-full flex-col px-2 py-6'>
          {/* open hours */}
          <motion.div
            ref={operatingHoursRef}
            variants={bumpingVariants}
            initial='initial'
            animate={operatingHoursInInView ? 'animate' : 'initial'}
            className='mb-4 flex flex-row justify-center
              text-lg md:text-2xl'
          >
            Every day 6:00 am - 6:00 pm
          </motion.div>

          {/* links */}
          <section id='contact'>
            <div className='flex flex-row justify-between'>
              {/* contact */}
              <div
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

              {/* icons */}
              <div className='my-auto flex flex-col items-center md:gap-6'>
                <div className='flex items-center justify-between md:gap-6'>
                  <TiktokIconLink className='px-1 py-1' navBarIcon={false} />
                  <WhatsappIconLink className='px-2 py-1' navBarIcon={false} />
                </div>

                <div className='flex items-center justify-between md:gap-6'>
                  <IgIconLink className='px-2 pt-1' navBarIcon={false} />
                  <CoffeeIconLink
                    className='py-2 pe-2 ps-3'
                    navBarIcon={false}
                  />
                </div>
              </div>
            </div>

            <h2 className='mt-5 text-center text-sm text-cf-dark dark:text-cf-white'>
              <span>
                &copy;{new Date().getFullYear()} Aquaman Bali All Rights
                Reserved.
              </span>
            </h2>

            {/* credits */}
            <h2 className='mb-0 flex w-full flex-row items-center justify-center'>
              <a
                href='https://api.whatsapp.com/send/?phone=41767294354&text&type=phone_number&app_absent=0'
                target='_blank'
                className='base-link 
                inline-flex flex-row items-center
                        justify-center text-sm hover:text-cf-dark/95 dark:hover:text-cf-white/90'
              >
                <Image
                  src={swissFlag}
                  alt='Swiss Flag'
                  width={16}
                  height={16}
                  className='me-2 rounded-full'
                />
                Swiss-made by{' '}
                <span className='underline underline-offset-2'>SiegfriedB</span>
              </a>
            </h2>
          </section>
        </div>
      </BorderTopGradient>
    </footer>
  )
}

export default Footer
