export default function getMapMarkers(surfTripImg) {
  const [
    cangguImg,
    medewiImg,
    lombokImg,
    nusaImg,
    seranganImg,
    uluwatuImg,
    balanganImg,
  ] = surfTripImg

  return {
    canggu: {
      latitude: -8.66,
      longitude: 115.13,
      location: 'Canggu',
      message: 'Visit us',
      image: cangguImg,
    },
    medewi: {
      latitude: -8.418021095031536,
      longitude: 114.80565463058356,
      location: 'Medewi',
      image: medewiImg,
    },
    balangan: {
      latitude: -8.79192670928786,
      longitude: 115.12338442686384,
      location: 'Balangan',
      image: balanganImg,
    },
    uluwatu: {
      latitude: -8.814231723842045,
      longitude: 115.08808852610146,
      location: 'Uluwatu',
      image: uluwatuImg,
    },
    serangan: {
      latitude: -8.77076526773642,
      longitude: 115.22288958153536,
      location: 'Serangan',
      image: seranganImg,
    },
    nusa: {
      latitude: -8.677877151151367,
      longitude: 115.45591486406514,
      location: 'Nusa-Lembongan',
      image: nusaImg,
    },
    lombok: {
      latitude: -8.559890264447741,
      longitude: 116.3182464071793,
      location: 'Lombok',
      image: lombokImg,
    },
  }
}
