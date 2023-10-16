import SurfLessonsLayout from '@/components/layouts/SurfLessonsLayout'
import { groupLessonsImages } from '@/data/surfLessonsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'

const SurfLessonsGroup = ({ images }) => {
  return (
    <>
      <SurfLessonsLayout.Body.Header>
        <h2 className='mb-0 text-center'>Group</h2>
        <h3 className='text-center'>1 Coach & 2 Guests</h3>
      </SurfLessonsLayout.Body.Header>

      <SurfLessonsLayout.Body.Content images={images}>
        <div>
          <div className='flex items-baseline space-x-4 '>
            <h3>1 Surf Lesson</h3>
            <span className='text-3xl'>🏄‍♀️</span>
          </div>
          <h5 className='text-cf-dark dark:text-cf-white'>
            <span className='underline underline-offset-4'>Total</span> for 2
            Guests
          </h5>
          <div className='flex items-baseline space-x-4'>
            <h3>2 hours:</h3>
            <h5 className='text-cf-dark dark:text-cf-white'>
              650K IDR (USD 42)
            </h5>
          </div>
        </div>

        <div>
          <div className='flex items-baseline space-x-4'>
            <h3>3 Surf Lessons</h3>
            <span className='text-3xl'>🏄‍♀️🏄‍♀️🏄‍♀️</span>
          </div>
          <h5 className='text-cf-dark dark:text-cf-white'>
            <span className='underline underline-offset-4'>Total</span> for 2
            Guests
          </h5>
          <div className='flex items-baseline space-x-4'>
            <h3>3 * 2 hours:</h3>
            <h5 className='text-cf-dark dark:text-cf-white '>
              1.9M IDR (USD 123)
            </h5>
          </div>
        </div>
      </SurfLessonsLayout.Body.Content>
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
