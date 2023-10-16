import { BorderFullGradient } from '@/components/BorderGradient'
import { ButtonAsGradient } from '@/components/ButtonAsGradient'
import { CustomCarousel } from '@/components/Carousel'
import SurfLessonsLayout from '@/components/layouts/SurfLessonsLayout'
import { privateLessonsImages } from '@/data/surfLessonsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'

const SurfLessonsPrivate = ({ images }) => {
  return (
    <>
      <h2 className='mb-0 text-center'>Private</h2>
      <h3 className='mb-0 text-center'>1 Coach & 1 Guest</h3>

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
            <div className='flex items-baseline space-x-4 '>
              <h3>1 Surf Lesson</h3>
              <span className='text-3xl'>🏄‍♀️</span>
            </div>

            <div className='flex items-baseline space-x-4'>
              <h4>2 hours:</h4>
              <h5 className='text-cf-dark dark:text-cf-white'>
                350K IDR (USD 22)
              </h5>
            </div>
          </div>

          <div>
            <div className='flex items-baseline space-x-4'>
              <h3>3 Surf Lessons</h3>
              <span className='text-3xl'>🏄‍♀️🏄‍♀️🏄‍♀️</span>
            </div>

            <div className='flex items-baseline space-x-4'>
              <h4>3 * 2 hours:</h4>
              <h5 className='text-cf-dark dark:text-cf-white'>
                1M IDR (USD 64)
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

export default SurfLessonsPrivate

SurfLessonsPrivate.Layout = SurfLessonsLayout

export async function getStaticProps() {
  const privateLessonsImgPromises = privateLessonsImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const privateLessonsImg = await Promise.all(privateLessonsImgPromises)

  return {
    props: {
      images: privateLessonsImg,
    },
  }
}
