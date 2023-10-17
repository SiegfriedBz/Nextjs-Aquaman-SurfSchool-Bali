import { useRef } from 'react'
import ButtonScrollToTop from '../ButtonScrollToTop'

const PageLayout = ({ children }) => {
  const ref = useRef(null)

  const scrollToTop = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={ref} className='page-layout relative scroll-mt-[8rem]'>
      {children}
      <ButtonScrollToTop scrollToTop={scrollToTop} bottomPageBtn={true} />
    </div>
  )
}

export default PageLayout
