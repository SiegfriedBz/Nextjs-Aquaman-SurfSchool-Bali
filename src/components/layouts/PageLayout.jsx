import React from 'react'

const PageLayout = ({ children }) => {
  return (
    <div
      // mt-[5rem] to push the content below the navbar on non-home pages
      className='mt-[5rem] py-8 xs:py-12 sm:py-16 md:py-24 lg:py-32'
    >
      {children}
    </div>
  )
}

export default PageLayout
