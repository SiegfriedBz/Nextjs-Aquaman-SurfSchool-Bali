import { useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'

const Hero = () => {
  const router = useRouter()
  const [arrowIsClicked, setArrowIsClicked] = useState(false)

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-between '>
        <div className={'hero-image dark:opacity-85 opacity-100'}></div>
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
            setArrowIsClicked(true)
            router.push('#school-carousel')
          }}
          className={`arrow text-primary absolute bottom-0 left-0 right-0 cursor-pointer text-5xl lg:text-6xl xl:left-1/2 ${
            arrowIsClicked ? 'animate-none' : ''
          }`}
        >
          <FontAwesomeIcon icon={faCircleDown} />
        </button>
      </div>
    </>
  )
}

export default Hero
