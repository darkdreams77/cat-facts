import axios from 'axios'

export const fetchCatImage2 = async () => {
  return await axios.get('https://api.thecatapi.com/v1/images/search', {
    params: {
      'x-api-key': '44f356e7-1ed2-468c-93e6-24428117c37d',
    },
  })
}
