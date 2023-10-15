import { motion } from 'framer-motion'

const Modal = ({ mobileMenuIsOpen, setMobileMenuIsOpen, children }) => {
  return (
    <motion.div
      id='backdrop'
      className={`${
        mobileMenuIsOpen ? 'z-20' : '-z-50'
      } fixed left-0 top-1/2 flex h-screen w-full -translate-y-1/2 items-center justify-center backdrop-blur-md lg:hidden`}
      initial={{ opacity: 0 }}
      animate={mobileMenuIsOpen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      onClick={() => setMobileMenuIsOpen(false)}
    >
      <ModalMenu mobileMenuIsOpen={mobileMenuIsOpen}>{children}</ModalMenu>
    </motion.div>
  )
}

export default Modal

const modalMenuVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
  exit: {
    y: '100vh',
  },
}

const ModalMenu = ({ mobileMenuIsOpen, children }) => {
  return (
    <motion.div
      variants={modalMenuVariants}
      initial='hidden'
      animate={mobileMenuIsOpen ? 'visible' : ''}
      exit='exit'
      className='mx-4 flex w-full flex-col
        items-center justify-center
        rounded-lg 
        border border-stone-100
        bg-slate-900/50

        p-4 opacity-50
        shadow-2xl
        dark:border-slate-900 dark:bg-stone-100/50
        sm:mx-12 md:mx-24 lg:hidden'
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  )
}
