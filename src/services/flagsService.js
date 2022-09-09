import axios from 'axios'

export async function getFlags() {
  return axios.get('https://restcountries.com/v3.1/all').then((res) => res.data)
}
export async function getFlagsByRegion(region) {
  return axios
    .get(`https://restcountries.com/v3.1/region/${region}`)
    .then((res) => res.data)
}
