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
      <section id='carousel-reviews'>
        <Carousel>
          {TESTIMONIALS_QUOTES.map((quote, i) => {
            return (
              <div key={`quote-${i}`} className={styles.embla__slide}>
                <figure className='mb-4'>
                  <blockquote className='relative rounded-3xl py-6 pl-12 pr-8 '>
                    <p
                      className='mx-2 mt-2 line-clamp-4
                        px-2 text-xl text-slate-900
                        before:absolute before:left-0 before:top-0
                        before:translate-x-2 before:translate-y-2
                        before:transform before:font-serif before:text-9xl
                      before:text-slate-600 before:opacity-25 before:content-["\201C"]
                        after:absolute after:-bottom-20 after:right-0 after:-translate-x-2
                        after:-translate-y-2 after:transform after:font-serif after:text-9xl
                      after:text-slate-600 after:opacity-25 after:content-["\201D"]
                      dark:text-slate-400 md:text-2xl'
                    >
                      {quote.message}{' '}
                    </p>
                    <a
                      href='https://goo.gl/maps/iHPokm4Q943N2f2fA'
                      target='_blank'
                      className='ms-4 mt-2 flex items-center
                        text-xl italic text-slate-500 outline-none
                        md:mt-8 md:text-xl'
                    >
                      Read full review on{' '}
                      <Image
                        src={googleIcon}
                        width={40}
                        height={40}
                        alt='google-icon'
                        className='ml-2 md:h-16 md:w-16'
                      />
                    </a>
                  </blockquote>
                  <figcaption className='mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 md:text-2xl'>
                    &#8212; {quote.author}
                  </figcaption>
                </figure>
              </div>
            )
          })}
        </Carousel>
      </section>
    </div>
  )
}

export const TestimonialsLinks = () => {
  return (
    <section id='all-reviews-link' className='mx-auto mb-3 mt-2'>
      <a
        href='https://goo.gl/maps/iHPokm4Q943N2f2fA'
        target='_blank'
        className=''
      >
        <h3 className='text-center text-xl md:text-4xl'>
          Top-rated Surf School
        </h3>
        <div className='mt-2 flex items-center'>
          <span className='m-auto text-4xl font-bold text-amber-400 hover:text-amber-500 md:text-5xl'>
            {renderStars}
          </span>
        </div>
      </a>
    </section>
  )
}
