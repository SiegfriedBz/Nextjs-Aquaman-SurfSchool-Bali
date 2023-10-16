import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

const PageLayout = ({ children }) => {
  const ref = useRef(null)

  return (
    <div ref={ref} className='page-layout relative scroll-mt-[8rem]'>
      {children}
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })}
        className='absolute bottom-[0.35rem] right-0 cursor-pointer text-2xl text-ternary-light transition-all hover:text-ternary'
      />
    </div>
  )
}

export default PageLayout
