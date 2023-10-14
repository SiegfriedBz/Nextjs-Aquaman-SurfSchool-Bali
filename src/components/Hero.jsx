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
      className='flex min-h-[80vh] flex-col items-center justify-between'
    >
      <div className='hero-image opacity-100 dark:opacity-90'></div>
      <div className='hero-title-wrapper flex h-1/2 flex-col justify-start lg:items-end lg:justify-center'>
        <h1 className='title text-gradient text-center md:text-6xl lg:text-7xl xl:text-right xl:text-8xl 2xl:text-9xl'>
          Aquaman Bali
        </h1>
        <h2 className='text-gradient sub-title text-center md:text-5xl xl:text-6xl 2xl:text-7xl'>
          Surf School & Trips
        </h2>
      </div>

      <button
        onClick={() => {
          setArrowIsClicked((prev) => !prev)
          router.push('#school-carousel')
        }}
        className={`relative bottom-0 cursor-pointer text-5xl text-primary lg:text-6xl ${
          arrowIsClicked ? ' animate-none' : 'arrow'
        }`}
      >
        <FontAwesomeIcon icon={faCircleDown} />
      </button>
    </div>
  )
}

export default forwardRef(Hero)
