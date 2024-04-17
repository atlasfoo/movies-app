import { MediaType, TrendingResponse } from '~/api/types/api-contracts'

const API_KEY = process.env.EXPO_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const getTrending = async (/* page: number = 1 */): Promise<TrendingResponse> => {
  const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${1}`)
  const json = await response.json()

  return json
}

export const getSearchResults = async (query: string): Promise<TrendingResponse> => {
  console.log('SEARCH: ', query)

  const response = await fetch(
    `${BASE_URL}/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  )

  const data = await response.json()
  return data
}

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(`${BASE_URL}//${type}/${id}?language=en-US&api_key=${API_KEY}`)
  const data = await response.json()
  return data
}
