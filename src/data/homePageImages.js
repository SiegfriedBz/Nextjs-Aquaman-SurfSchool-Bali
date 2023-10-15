import rendyTeach from '@/data/rendyTeach.json'
import rendySurf from '@/data/rendySurf.json'
import surfTrips from '@/data/surfTrips.json'
const [, cangguImg, rendyTeach03, rendyTeach04, , , rendyTeach07] = rendyTeach
const [
  rendySurf01,
  rendySurf01Small,
  rendySurf02,
  rendySurf02Small,
  ,
  rendySurf03Small,
  ,
  rendySurf04Small,
  rendySurf05,
  ,
  ,
  ,
  ,
  ,
  rendySurf10Small,
  rendySurf11,
] = rendySurf

const [medewiImg, lombokImg, nusaImg, seranganImg, uluwatuImg, balanganImg] =
  surfTrips

const homeSurfLessonsImages = [
  rendySurf01,
  rendyTeach04,
  rendySurf05,
  rendyTeach07,
  rendySurf11,
  rendyTeach03,
  rendySurf02,
]
const homeAboutMeImages = [
  rendySurf01Small,
  rendySurf02Small,
  rendySurf03Small,
  rendySurf04Small,
  rendySurf10Small,
]
const homeSurfTripsImages = [
  cangguImg,
  medewiImg,
  lombokImg,
  nusaImg,
  seranganImg,
  uluwatuImg,
  balanganImg,
]

export { homeSurfLessonsImages, homeAboutMeImages, homeSurfTripsImages }
