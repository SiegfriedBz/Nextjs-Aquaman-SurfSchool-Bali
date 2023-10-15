import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Carousel from './Carousel'
import styles from './carousel.module.css'
import googleIcon from '../../public/logos/google_g_icon.png'
import { TESTIMONIALS_QUOTES } from '../data/testimonials'

const renderStars = Array.from({ length: 5 }).map((_, i) => {
  return <FontAwesomeIcon key={`star-${i}`} icon={faStar} />
})

export const Testimonials = () => {
  return (
    <div className='flex flex-col'>
      <div id='testimonials-carousel'>
        <Carousel>
          {TESTIMONIALS_QUOTES.map((quote, i) => {
            return (
              <div key={`quote-${i}`} className={styles.embla__slide}>
                <figure className=''>
                  <blockquote className='relative py-3 pl-12 pr-8 '>
                    <p
                      className='
                        line-clamp-4
                        text-xl 
                        text-cf-dark

                        before:absolute
                        before:left-0
                        before:top-0
                        before:translate-x-1 before:translate-y-2
                        before:font-serif before:text-7xl
                      before:text-cf-dark/25
                        before:content-["\201C"]

                        after:absolute
                        after:-bottom-20
                        after:right-0
                        after:-translate-x-2

                        after:-translate-y-10
                        after:font-serif after:text-7xl      
                        after:text-cf-dark/25
                        after:content-["\201D"]
                        dark:text-cf-gray

                        dark:before:text-cf-gray
                        dark:after:text-cf-gray
                        md:text-2xl
                      '
                    >
                      {quote.message}{' '}
                    </p>
                    <a
                      href='https://goo.gl/maps/iHPokm4Q943N2f2fA'
                      target='_blank'
                      className='dark-white-link ms-4 mt-2 flex items-center
                        text-xl italic outline-none 
                        md:mt-8 md:text-xl'
                    >
                      Read full review on{' '}
                      <Image
                        src={googleIcon}
                        width={40}
                        height={40}
                        alt='google-icon'
                        className='ml-2 dark:ml-3 md:h-16 md:w-16'
                      />
                    </a>
                  </blockquote>
                  <figcaption
                    className='mt-2 px-2
                    text-right text-xl italic
                    text-cf-dark dark:text-cf-gray-dark md:text-2xl'
                  >
                    &#8212; {quote.author}
                  </figcaption>
                </figure>
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export const TestimonialsLinks = () => {
  return (
    <div id='testimonials-link' className='mx-auto mb-4 mt-8'>
      <a
        href={process.env.NEXT_PUBLIC_STREETVIEW_LINK || '/'}
        target='_blank'
        className='dark-white-link '
      >
        <h3 className='text-center'>Top-rated Surf School</h3>
        <div className='mt-1 flex items-center'>
          <h3 className='m-auto text-ternary hover:text-ternary/90'>
            {renderStars}
          </h3>
        </div>
      </a>
    </div>
  )
}
