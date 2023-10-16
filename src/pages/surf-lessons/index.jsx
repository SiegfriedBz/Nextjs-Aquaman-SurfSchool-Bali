import SurfLessonsLayout from '@/components/layouts/SurfLessonsLayout'
import { privateLessonsImages } from '@/data/surfLessonsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'

const SurfLessonsPrivate = ({ images }) => {
  return (
    <>
      <SurfLessonsLayout.Body.Header>
        <h2 className='mb-0 text-center'>Private</h2>
        <h3 className='text-center'>1 Coach & 1 Guest</h3>
      </SurfLessonsLayout.Body.Header>

      <SurfLessonsLayout.Body.Content images={images}>
        <div>
          <div className='flex items-baseline space-x-4 '>
            <h3>1 Surf Lesson</h3>
            <span className='text-3xl'>🏄‍♀️</span>
          </div>

          <div className='flex items-baseline space-x-4'>
            <h3>2 hours:</h3>
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
            <h3>3 * 2 hours:</h3>
            <h5 className='text-cf-dark dark:text-cf-white'>1M IDR (USD 64)</h5>
          </div>
        </div>
      </SurfLessonsLayout.Body.Content>
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
