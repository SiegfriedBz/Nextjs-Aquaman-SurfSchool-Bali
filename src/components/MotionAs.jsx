import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const variants = (initialX, delay, duration) => {
  return {
    initial: {
      x: initialX,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        type: 'spring',
        stiffness: 120,
      },
    },
  }
}

const MotionAs = ({
  As = 'h1',
  initialX = -100,
  delay = 0,
  duration = 0.5,
  className = '',
  children,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const RenderAs = motion(As)

  return (
    <RenderAs
      ref={ref}
      variants={variants(initialX, delay, duration)}
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      className={className}
    >
      {children}
    </RenderAs>
  )
}

export default MotionAs
