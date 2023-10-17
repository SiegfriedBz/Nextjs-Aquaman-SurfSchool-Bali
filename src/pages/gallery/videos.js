import GalleryLayout from '@/components/layouts/GalleryLayout'
import { CldVideoPlayer } from 'next-cloudinary'

const GalleryVideos = () => {
  return (
    <GalleryLayout.Body>
      <CldVideoPlayer
        id='rendy-landing-page-video'
        width='1920'
        height='1080'
        src='RendyLandingPageVideo'
        colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
        autoPlay='always'
        loop={true}
        className='my-4 rounded-lg border-0 shadow-2xl'
      />

      <hr />

      <CldVideoPlayer
        id='rendy-teach-video-01'
        width='1920'
        height='1080'
        src='RendyTeachVideo01'
        colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
        autoPlay='false'
        loop={true}
        className='my-4 rounded-md border-0 shadow-2xl'
      />

      <hr />

      <CldVideoPlayer
        id='rendy-video-drone'
        width='1920'
        height='1080'
        src='RendyVideoDrone'
        colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
        autoPlay='false'
        loop={true}
        className='mt-4 rounded-md border-0 shadow-2xl'
      />
    </GalleryLayout.Body>
  )
}

export default GalleryVideos

GalleryVideos.Layout = GalleryLayout
