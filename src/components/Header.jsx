import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { BorderBottomGradient } from './BorderGradient'

const navVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 0.3,
    },
  },
}

const Header = () => {
  return (
    <header id='header' className='fixed left-0 right-0 top-0 z-[999]'>
      <motion.div variants={navVariants} initial='hidden' animate='visible'>
        <BorderBottomGradient>
          <Navbar />
        </BorderBottomGradient>
      </motion.div>
    </header>
  )
}

export default Header
