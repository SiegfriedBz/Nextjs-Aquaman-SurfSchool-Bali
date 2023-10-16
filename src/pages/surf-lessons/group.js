import { BorderFullGradient } from '@/components/BorderGradient'
import { ButtonAsGradient } from '@/components/ButtonAsGradient'
import { CustomCarousel } from '@/components/Carousel'
import SurfLessonsLayout from '@/components/layouts/SurfLessonsLayout'
import { groupLessonsImages } from '@/data/surfLessonsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'

const SurfLessonsGroup = ({ images }) => {
  return (
    <>
      <h2 className='mb-0 text-center'>Group</h2>
      <h3 className='mb-0 text-center'>1 Coach & 2 Guests</h3>

      <BorderFullGradient className='my-4'>
        <CustomCarousel
          images={images}
          carouselKey='private-lessons'
          carouselClasses='mb-5 h-72 md:h-[30rem]'
          imageClasses='h-full w-full md:w-11/12 object-cover shadow-2xl mx-auto'
          priority={true}
        />
        <div className='space-y-8 px-2 py-4'>
          <div>
            <div className='flex items-center space-x-4 '>
              <h3 className='m-0'>1 Surf Lesson</h3>
              <span className='text-3xl'>🏄‍♀️</span>
            </div>
            <h5 className='text-cf-dark dark:text-cf-white'>
              Total for 2 Guests
            </h5>
            <div className='flex items-center space-x-4'>
              <h4>2 hours:</h4>
              <h5 className='text-cf-dark dark:text-cf-white'>
                650K IDR (USD 42)
              </h5>
            </div>
          </div>

          <div>
            <div className='flex items-center space-x-4'>
              <h3 className='m-0'>3 Surf Lessons</h3>
              <span className='text-3xl'>🏄‍♀️🏄‍♀️🏄‍♀️</span>
            </div>
            <h5 className='text-cf-dark dark:text-cf-white'>
              Total for 2 Guests
            </h5>
            <div className='mb-0 flex items-center space-x-4'>
              <h4>3 * 2 hours:</h4>
              <h5 className='mb-0 text-cf-dark dark:text-cf-white '>
                1.9M IDR (USD 123)
              </h5>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <ButtonAsGradient
            As='Link'
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
            target='_blank'
            extraClasses='mx-auto my-4'
          >
            Surf Now
          </ButtonAsGradient>
        </div>
      </BorderFullGradient>
    </>
  )
}

export default SurfLessonsGroup

SurfLessonsGroup.Layout = SurfLessonsLayout

export async function getStaticProps() {
  const groupLessonsImgPromises = groupLessonsImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const groupLessonsImg = await Promise.all(groupLessonsImgPromises)

  return {
    props: {
      images: groupLessonsImg,
    },
  }
}
