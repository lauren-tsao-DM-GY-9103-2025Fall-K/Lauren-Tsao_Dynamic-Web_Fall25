// API DOC LINK: https://www.api-ninjas.com/api/horoscope
import axios from 'axios'

const getHoroscope = async (zodiacInfo) => {
  const response = await axios.get('https://api.api-ninjas.com/v1/horoscope', {
    headers: {
      'X-Api-Key': 'LivY1SMapby2l93hlthtSQ==uL2FDT7hKW3W5QMr',
    },
    params: {
      zodiac: zodiacInfo.toLowerCase(),
    },
  })

  return response.data
}

export default getHoroscope
