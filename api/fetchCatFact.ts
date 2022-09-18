import axios from 'axios'

export const fetchCatFact2 = async () => {
  return await axios.get('https://catfact.ninja/fact')
}
