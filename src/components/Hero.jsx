import { useState, forwardRef } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'

const Hero = (props, heroRef) => {
  const router = useRouter()
  const [arrowIsClicked, setArrowIsClicked] = useState(false)

  return (
    <div
      ref={heroRef}
      // className='grid items-center justify-between sm:grid-cols-4 md:grid-cols-6 md:grid-rows-4 '
      className='flex min-h-[80vh] flex-col items-center justify-between'
    >
      <div className='hero-image opacity-100 dark:opacity-90'></div>
      <div className='hero-title-wrapper'>
        <h1 className='title text-gradient text-center md:text-6xl xl:text-8xl'>
          Aquaman Bali
        </h1>
        <h2 className='text-gradient sub-title text-center md:text-5xl xl:text-6xl'>
          Surf School & Trips
        </h2>
      </div>

      <button
        onClick={() => {
          setArrowIsClicked((prev) => !prev)
          router.push('#school-carousel')
        }}
        className={`text-primary relative bottom-0 cursor-pointer text-5xl lg:text-6xl ${
          arrowIsClicked ? ' animate-none' : 'arrow'
        }`}
      >
        <FontAwesomeIcon icon={faCircleDown} />
      </button>
    </div>
  )
}

export default forwardRef(Hero)
