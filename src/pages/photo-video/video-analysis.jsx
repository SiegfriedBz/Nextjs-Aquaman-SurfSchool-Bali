import PhotoVideoLayout from '@/components/layouts/PhotoVideoLayout'
import { getBase64ImageUrl, getImageUrl } from '@/utils/cloudinaryUtils'
import { videoAnalysis } from '@/data/videoPageImages'

const PhotoVideoAnalysis = ({ image }) => {
  return (
    <>
      <PhotoVideoLayout.Body.Header>
        <h2 className='text-center'>Video Analysis</h2>
      </PhotoVideoLayout.Body.Header>

      <PhotoVideoLayout.Body.Content image={image}>
        <h3 className='mt-4'>Who is it for?</h3>
        <p className='text-justify'>
          Seeing yourself surf on videos and receive profound feedback what you
          are already good at or where still is room for improvement is the best
          way to enhance your surfing. Especially for advanced beginner,
          intermediate and advanced surfer video analysis can have a huge impact
          on your surfing.
        </p>

        <h3 className='mt-4'>How does it work?</h3>
        <p className='text-justify'>
          The surf session (max 2 hours) will be filmed with high quality
          equipment. After your surf session (with or without surf
          instructor/guide), we will look at the footage and analyse them with
          you. That includes evaluation of your current surf situation,
          detailled explanation of the right surf technique and how you can
          correct mistakes. Futhermore you will receive training tips to improve
          your surfing and what you should work on.
        </p>

        <p className='text-justify'>
          You will be given the files via AirDrop (iPhone) or they can be
          uploaded on WeTransfer for you to download on the same day.
        </p>
      </PhotoVideoLayout.Body.Content>
    </>
  )
}

export default PhotoVideoAnalysis

PhotoVideoAnalysis.Layout = PhotoVideoLayout

export async function getStaticProps() {
  const blurDataUrl = await getBase64ImageUrl(videoAnalysis.image)

  const videoAnalysisImg = {
    src: getImageUrl(videoAnalysis.image),
    blurDataUrl: blurDataUrl,
    id: videoAnalysis.id,
    alt: videoAnalysis.alt,
  }

  return {
    props: {
      image: videoAnalysisImg,
    },
  }
}
